import Eventos from "../../models/Eventos.js"


const registrarEventos = async (req, res) => {
    const {nom_evento, fecha, detalle, imagen, id_sede, total_cupos} = req.body

    try {                                  
        await Eventos.create({
            nom_evento, fecha, detalle, imagen, id_sede, total_cupos
        })      
           
        res.status(200).json({msg: "Evento Registrado!"})

    } catch (error) {
        console.log(error)            
    }      
}


const editarEventos =  async (req, res) =>{
    const {id} = req.params
    const {nom_evento, fecha, detalle, imagen, id_sede, total_cupos} = req.body

    try {
        const rolExiste = await Eventos.findByPk(id) 

        if(!rolExiste){
            const error = new Error("Evento no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await Eventos.update({
            nom_evento, fecha, detalle, imagen, id_sede, total_cupos
        },{
            where:{
                id : id
            }
        }) 

        //res.json(empresaActualizada)         
        res.status(200).json({msg: "Evento Actualizado"})
        //console.log(empresaActualizada)

    } catch (error) {
        console.log(error)            
    }      
}

const eliminarEventos = async (req, res) =>{
    const {id} = req.params

    try {
        const existe = await Eventos.findByPk(id)

        if(!existe){
            const error = new Error("Movimiento no Existe")
            return res.status(404).json({msg: error.message})
        }
    
        await Eventos.destroy({
            where:{
                id : id
            }
        })

        await Log.create({
            des_log : 'Eventos  :' + usuario.nom_usuario + ` elimina : ` + JSON.stringify(existe) 
        })     
        
        res.status(200).json({msg: "Evento Eliminado"})

    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar el Evento - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}

const obtenerEventos = async (req, res) => {
    try {
        const {id_sede} = req.params
        const eventos = await Eventos.findAll(
            {where:{id_sede}},
            
        )
        return res.status(200).json(eventos)        
    } catch (error) {
        console.log(error)
    }
}


export{
    registrarEventos,
    editarEventos,
    eliminarEventos,
    obtenerEventos
}