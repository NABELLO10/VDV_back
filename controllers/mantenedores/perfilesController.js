import Perfiles from "../../models/Perfiles.js"
import Log from "../../models/Log.js"

const registrarPerfil = async (req, res) => {
    const {nom_perfil, est_activo, id_empresa} = req.body

    try {  
        const perfilExiste = await Perfiles.findOne({
            where:{
                nom_perfil : nom_perfil,
                id_empresa
            }
        }) 

        if(perfilExiste){
            const error = new Error("Perfil ya existe")
            return res.status(400).json({msg : error.message})
        }
                         
        await Perfiles.create({
            nom_perfil, est_activo, id_empresa
        })      
                  
        //res.json({nuevaEmpresa})
        res.status(200).json({msg: "Perfil Registrado!"})

    } catch (error) {
        console.log(error)            
    }      
}


const editarPerfil =  async (req, res) =>{
    const {id} = req.params
    const {nom_perfil,  est_activo} = req.body

    try {
        const perfilExiste = await Perfiles.findByPk(id) 

        if(!perfilExiste){
            const error = new Error("Perfil no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await Perfiles.update({
            nom_perfil, est_activo
        },{
            where:{
                id : id
            }
        }) 

        //res.json(empresaActualizada)         
        res.status(200).json({msg: "Perfil Actualizado"})
        //console.log(empresaActualizada)

    } catch (error) {
        console.log(error)            
    }      
}

const eliminarPerfil = async (req, res) =>{
    const {id} = req.params

    try {
        const existe = await Perfiles.findByPk(id)

        if(!existe){
            const error = new Error("Perfil no Existe")
            return res.status(404).json({msg: error.message})
        }
    
        await Perfiles.destroy({
            where:{
                id : id
            }
        })

        await Log.create({
            des_log : 'Areas  :' + usuario.nom_usuario + ` elimina el area: ` + JSON.stringify(existe) 
        }) 
    
        
        res.status(200).json({msg: "Perfil Eliminado"})

    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar el perfil - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}

export{
    registrarPerfil,
    editarPerfil,
    eliminarPerfil
}