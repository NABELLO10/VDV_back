import Inscripciones from "../../models/Inscripciones.js"
import Eventos from "../../models/Eventos.js"


const registrarInscripciones = async (req, res) => {
    const {id_evento, rut, nombres, ape_paterno, ape_materno, est_presente, obs} = req.body

    try {                                  
        await Inscripciones.create({
            id_evento, rut, nombres, ape_paterno, ape_materno, est_presente, obs
        })      
           
        res.status(200).json({msg: "Inscripción Registrado!"})

    } catch (error) {
        console.log(error)            
    }      
}


const editarInscripciones =  async (req, res) =>{
    const {id} = req.params
    const {id_evento, rut, nombres, ape_paterno, ape_materno, est_presente, obs} = req.body

    try {
        const rolExiste = await Inscripciones.findByPk(id) 

        if(!rolExiste){
            const error = new Error("Inscripción no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await Inscripciones.update({
            id_evento, rut, nombres, ape_paterno, ape_materno, est_presente, obs
        },{
            where:{
                id : id
            }
        }) 

        //res.json(empresaActualizada)         
        res.status(200).json({msg: "Inscripción Actualizado"})
        //console.log(empresaActualizada)

    } catch (error) {
        console.log(error)            
    }      
}

const eliminarInscripciones = async (req, res) =>{
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