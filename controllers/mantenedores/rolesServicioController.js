import RolesServicio from "../../models/RolesServicio.js"


const registrarRol = async (req, res) => {
    const {nom_rol, id_sede, est_activo} = req.body

    try {  
        const RolExiste = await RolesServicio.findOne({
            where:{
                nom_rol,
                id_sede
            }
        }) 

        if(RolExiste){
            const error = new Error("Rol ya existe")
            return res.status(400).json({msg : error.message})
        }
                         
        await RolesServicio.create({
            nom_rol, id_sede, est_activo
        })      
                  
        //res.json({nuevaEmpresa})
        res.status(200).json({msg: "Rol Registrado!"})

    } catch (error) {
        console.log(error)            
    }      
}


const editarRol =  async (req, res) =>{
    const {id} = req.params
    const {nom_rol, id_sede, est_activo} = req.body

    try {
        const rolExiste = await RolesServicio.findByPk(id) 

        if(!rolExiste){
            const error = new Error("Rol no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await RolesServicio.update({
            nom_rol, id_sede, est_activo
        },{
            where:{
                id : id
            }
        }) 

        //res.json(empresaActualizada)         
        res.status(200).json({msg: "Rol Actualizado"})
        //console.log(empresaActualizada)

    } catch (error) {
        console.log(error)            
    }      
}

const eliminarRol = async (req, res) =>{
    const {id} = req.params

    try {
        const existe = await RolesServicio.findByPk(id)

        if(!existe){
            const error = new Error("Rol no Existe")
            return res.status(404).json({msg: error.message})
        }
    
        await RolesServicio.destroy({
            where:{
                id : id
            }
        })

        await Log.create({
            des_log : 'ROL  :' + usuario.nom_usuario + ` elimina el Rol: ` + JSON.stringify(existe) 
        })     
        
        res.status(200).json({msg: "Rol Eliminado"})

    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar el Rol - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}

const obtenerRolesServicio = async (req, res) => {
    try {
        const {id_sede} = req.params
        const rolesServicio = await RolesServicio.findAll({where:{id_sede}})
        return res.status(200).json(rolesServicio)        
    } catch (error) {
        console.log(error)
    }
}


export{
    registrarRol,
    editarRol,
    eliminarRol,
    obtenerRolesServicio
}