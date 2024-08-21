import MinisterioPersonas from "../../models/MinisterioPersonas.js"
import Ministerios from "../../models/Ministerios.js"
import FichaPersonal from "../../models/FichaPersonal.js"
import Cargos from "../../models/Cargos.js"


const registrarPersonasMinisterios = async (req, res) => {
    const {id_ministerio, id_personal, id_cargo, est_activo, obs} = req.body

    try {                              
        await MinisterioPersonas.create({
            id_ministerio, id_personal, id_cargo, est_activo, obs
        })      
      
        res.status(200).json({msg: "Información Registrada"})

    } catch (error) {
        console.log(error)            
    }      
}


const eliminarPersonasMinisterios = async (req, res) =>{
    const { id } = req.params;
    try {
        const existe =  await MinisterioPersonas.findByPk(id)

        if(!existe){
            const error = new Error("ID inexistente")
            return res.status(400).json({msg: error.message})
        }
   
        await MinisterioPersonas.destroy({
            where:{
                id : id
            }
        })
    res.status(200).json({msg: "Información eliminada"})
    
    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar Información - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}


const editarMinisteriosPersonas =  async (req, res) =>{
    const {id} = req.params
    const {id_ministerio, id_personal, id_cargo, est_activo, obs} = req.body

    try {
        const existe = await MinisterioPersonas.findByPk(id) 

        if(!existe){
            const error = new Error("Información no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await MinisterioPersonas.update({
            id_ministerio, id_personal, id_cargo, est_activo, obs
        },{
            where:{
                id : id
            }
        })     
        res.status(200).json({msg: "Información Actualizada"})   

    } catch (error) {
        console.log(error)            
    }      
}

const obtenerPersonasMinisterios = async (req, res) => {
    try {
        const {id_ministerio} = req.params
        const resultado = await MinisterioPersonas.findAll({
            where:{id_ministerio},
            include:[{model : FichaPersonal}, {model : Ministerios}, {model : Cargos}]
        })
        return res.status(200).json(resultado)        
    } catch (error) {
        console.log(error)
    }
}


export{
    registrarPersonasMinisterios,
    editarMinisteriosPersonas,
    eliminarPersonasMinisterios,
    obtenerPersonasMinisterios
}