
import PersonasCompromisos from "../../models/PersonasCompromisos.js"
import FichaPersonal from "../../models/FichaPersonal.js"
import TipoCompromisos from "../../models/TipoCompromisos.js"


const registrarPersonaCompromiso = async (req, res) => {
    const {id_personal, id_compromiso, fecha_inicio, fecha_termino, obs , est_activo} = req.body

    try {                         
        await PersonasCompromisos.create({
            id_personal, id_compromiso, fecha_inicio, fecha_termino, obs , est_activo
        })      
      
        res.status(200).json({msg: "Compromiso Registrado"})

    } catch (error) {
        console.log(error)            
    }      
}


const editarPersonaCompromiso =  async (req, res) =>{
    const {id} = req.params
    const {id_personal, id_compromiso, fecha_inicio, fecha_termino, obs , est_activo} = req.body

    try {
        const existe = await PersonasCompromisos.findByPk(id) 

        if(!existe){
            const error = new Error("Compromiso no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await PersonasCompromisos.update({
            id_personal, id_compromiso, fecha_inicio, fecha_termino, obs , est_activo
        },{
            where:{
                id : id
            }
        })     
        res.status(200).json({msg: "Compromiso Actualizado"})   

    } catch (error) {
        console.log(error)            
    }      
}


const eliminarPersonaCompromiso = async (req, res) =>{
    const { id } = req.params;

    try {        
        await PersonasCompromisos.destroy({
            where:{
                id : id
            }
        })
        
        res.status(200).json({msg: "Compromiso Eliminado"})
 
    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar el compromiso - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}


const obtenerPersonasCompromisos = async (req, res) => {
    try {
        const {id_personal} = req.params
        const pro = await PersonasCompromisos.findAll({
            where:{id_personal},
            include:[{model : FichaPersonal},{model: TipoCompromisos}],
            order: [['id', 'DESC']]
        })
        return res.status(200).json(pro)        
    } catch (error) {
        console.log(error)
    }
}


export{
    registrarPersonaCompromiso,
    editarPersonaCompromiso,
    eliminarPersonaCompromiso,
    obtenerPersonasCompromisos
}