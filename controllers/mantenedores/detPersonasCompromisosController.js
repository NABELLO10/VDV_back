
import DetPersonasCompromisos from "../../models/DetPersonasCompromisos.js"
import PersonasCompromisos from "../../models/PersonasCompromisos.js"


const registrarDetalleCompromiso = async (req, res) => {
    const {id_persona_compromiso, obs} = req.body

    try {                         
        await DetPersonasCompromisos.create({
            id_persona_compromiso, obs
        })      
      
        res.status(200).json({msg: "Detalle Registrado"})

    } catch (error) {
        console.log(error)            
    }      
}


const editarDetalleCompromiso =  async (req, res) =>{
    const {id} = req.params
    const {id_persona_compromiso, obs} = req.body

    try {
        const existe = await DetPersonasCompromisos.findByPk(id) 

        if(!existe){
            const error = new Error("Detalle no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await DetPersonasCompromisos.update({
            id_persona_compromiso, obs
        },{
            where:{
                id : id
            }
        })     
        res.status(200).json({msg: "Detalle Actualizado"})   

    } catch (error) {
        console.log(error)            
    }      
}


const eliminarDetalleCompromiso = async (req, res) =>{
    const { id } = req.params;

    try {        
        await DetPersonasCompromisos.destroy({
            where:{
                id : id
            }
        })
        
        res.status(200).json({msg: "Detalle Eliminado"})
 
    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar el compromiso - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}


const obtenerDetalleCompromiso = async (req, res) => {
    try {
        const {id_persona_compromiso} = req.params
        const pro = await DetPersonasCompromisos.findAll({
            where:{id_persona_compromiso},
            include:[{model : PersonasCompromisos}],
            order: [['id', 'DESC']]
        })
        return res.status(200).json(pro)        
    } catch (error) {
        console.log(error)
    }
}


export{
    registrarDetalleCompromiso,
    editarDetalleCompromiso,
    eliminarDetalleCompromiso,
    obtenerDetalleCompromiso
}