import UsuariosSedes from "../../models/UsuariosSedes.js"
import Usuarios from "../../models/Usuarios.js"
import Sedes from "../../models/Sedes.js"

const registrarUsuarioSedes = async (req, res) => {
    const {id_usuario, id_sede} = req.body

    try {                              
        await UsuariosSedes.create({
            id_usuario, id_sede
        })      
      
        res.status(200).json({msg: "Relación registrarUsuarioSedesda"})

    } catch (error) {
        console.log(error)            
    }      
}


const eliminarUsuarioSedes = async (req, res) =>{
    const { id } = req.params;
    try {
        const existe =  await UsuariosSedes.findByPk(id)

        if(!existe){
            const error = new Error("ID de tipo inexistente")
            return res.status(400).json({msg: error.message})
        }
   
        await UsuariosSedes.destroy({
            where:{
                id : id
            }
        })
    res.status(200).json({msg: "Relación eliminada"})
    
    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}


const editarUsuarioSedes =  async (req, res) =>{
    const {id} = req.params
    const {id_usuario, id_sede} = req.body

    try {
        const existe = await UsuariosSedes.findByPk(id) 

        if(!existe){
            const error = new Error("Relación no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await UsuariosSedes.update({
            id_usuario, id_sede
        },{
            where:{
                id : id
            }
        })     
        res.status(200).json({msg: "Relación Actualizada"})   

    } catch (error) {
        console.log(error)            
    }      
}

const obtenerUsuarioSedes = async (req, res) => {
    try {
        const {id_sede} = req.params
        const resultado = await UsuariosSedes.findAll({
            where:{id_sede},
            include:[{model : Usuarios}, {model : Sedes}]
        })
        return res.status(200).json(resultado)        
    } catch (error) {
        console.log(error)
    }
}


export{
    registrarUsuarioSedes,
    editarUsuarioSedes,
    eliminarUsuarioSedes,
    obtenerUsuarioSedes
}