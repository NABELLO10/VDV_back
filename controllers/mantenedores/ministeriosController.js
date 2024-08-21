
import Ministerios from "../../models/Ministerios.js"
import Sedes from "../../models/Sedes.js"


const registrarMinisterio = async (req, res) => {
    const {nom_ministerio, est_activo, id_sede} = req.body

    try {                         
        await Ministerios.create({
            nom_ministerio, est_activo, id_sede
        })      
      
        res.status(200).json({msg: "Ministerio Registrado"})

    } catch (error) {
        console.log(error)            
    }      
}


const editarMinisterio =  async (req, res) =>{
    const {id} = req.params
    const {nom_ministerio, est_activo, id_sede} = req.body

    try {
        const existe = await Ministerios.findByPk(id) 

        if(!existe){
            const error = new Error("Ministerio no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await Ministerios.update({
            nom_ministerio, est_activo, id_sede
        },{
            where:{
                id : id
            }
        })     
        res.status(200).json({msg: "Ministerio Actualizado"})   

    } catch (error) {
        console.log(error)            
    }      
}


const eliminarMinisterio = async (req, res) =>{
    const { id } = req.params;

    try {        
        await Ministerios.destroy({
            where:{
                id : id
            }
        })
        
        res.status(200).json({msg: "Ministerio Eliminado"})
 
    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar el Ministerio - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}


const obtenerMinisterios = async (req, res) => {
    try {
        const {id_sede} = req.params
        const pro = await Ministerios.findAll({
            where:{id_sede},
            include:[{model : Sedes}],
            order: [['nom_ministerio', 'ASC']]
        })
        return res.status(200).json(pro)        
    } catch (error) {
        console.log(error)
    }
}


export{
    registrarMinisterio,
    editarMinisterio,
    eliminarMinisterio,
    obtenerMinisterios
}