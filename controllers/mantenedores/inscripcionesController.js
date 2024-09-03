import Inscripciones from "../../models/Inscripciones.js"
import Eventos from "../../models/Eventos.js"
import Log from "../../models/Log.js"
import emailInscripcion from "../../helpers/emailInscripcion.js"


const registrarInscripciones = async (req, res) => {
    const {id_evento, rut, nombres, ape_paterno, ape_materno, est_presente, obs, email, est_pagado} = req.body

    try {   
          // Contar el número de inscripciones para el evento específico
        const inscripcionesCount = await Inscripciones.count({
            where: {
                id_evento
            }
        });

        const evento = await Eventos.findOne({id_evento})
   
        if (inscripcionesCount >= evento.total_cupos) {
            const error = new Error("Lo sentimos, no quedan cupos para este evento");
            return res.status(400).json({ msg: error.message });
        }

        const existe = await Inscripciones.findOne({
            where:{
                rut,
                id_evento        
            }
        }) 

        if(existe){
            const error = new Error("RUT ya registrado")
            return res.status(400).json({msg : error.message})
        }
        
        await Inscripciones.create({
            id_evento, rut, nombres, ape_paterno, ape_materno, est_presente, obs, email, est_pagado
        })    
        
        emailInscripcion({nombres, ape_paterno, rut,  evento, email})
           
        res.status(200).json({msg: "Inscripción Registrada"})


    } catch (error) {
        console.log(error)            
    }      
}


const editarInscripciones =  async (req, res) =>{
    const {id} = req.params
    const {id_evento, rut, nombres, ape_paterno, ape_materno, est_presente, obs, email, est_pagado} = req.body

    try {
        const rolExiste = await Inscripciones.findByPk(id) 

        if(!rolExiste){
            const error = new Error("Inscripción no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await Inscripciones.update({
            id_evento, rut, nombres, ape_paterno, ape_materno, est_presente, obs, email, est_pagado
        },{
            where:{
                id : id
            }
        }) 

        //res.json(empresaActualizada)         
        res.status(200).json({msg: "Inscripción Actualizada"})
        //console.log(empresaActualizada)

    } catch (error) {
        console.log(error)            
    }      
}

const eliminarInscripciones = async (req, res) =>{
    const {usuario} = req
    const {id} = req.params

    try {
        const existe = await Inscripciones.findByPk(id)

        if(!existe){
            const error = new Error("Inscripción no Existe")
            return res.status(404).json({msg: error.message})
        }
    
        await Inscripciones.destroy({
            where:{
                id : id
            }
        })

        await Log.create({
            des_log : 'Inscripciones  :' + usuario.nom_usuario + ` elimina : ` + JSON.stringify(existe) 
        })     
        
        res.status(200).json({msg: "Inscripción Eliminado"})

    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar el Inscripción - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}

const obtenerInscripciones = async (req, res) => {
    try {
        const {id_evento} = req.params
        const inscripciones = await Inscripciones.findAll(
            {where:{id_evento}, includes:[{model: Eventos}]},
            
        )
        return res.status(200).json(inscripciones)        
    } catch (error) {
        console.log(error)
    }
}


export{
    registrarInscripciones,
    editarInscripciones,
    eliminarInscripciones,
    obtenerInscripciones
}