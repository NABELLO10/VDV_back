import Servicios from "../../models/Servicios.js"


const registrarServicio = async (req, res) => {
    const {nom_servicio, fecha_servicio, id_sede} = req.body

    try {                                  
        await Servicios.create({
            nom_servicio, fecha_servicio, id_sede
        })      
                  
        //res.json({nuevaEmpresa})
        res.status(200).json({msg: "Servicio Registrado!"})

    } catch (error) {
        console.log(error)            
    }      
}


const editarServicio =  async (req, res) =>{
    const {id} = req.params
    const {nom_servicio, fecha_servicio, id_sede} = req.body

    try {
        const rolExiste = await Servicios.findByPk(id) 

        if(!rolExiste){
            const error = new Error("Servicio no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await Servicios.update({
            nom_servicio, fecha_servicio, id_sede
        },{
            where:{
                id : id
            }
        }) 

        //res.json(empresaActualizada)         
        res.status(200).json({msg: "Servicio Actualizado"})
        //console.log(empresaActualizada)

    } catch (error) {
        console.log(error)            
    }      
}

const eliminarServicio = async (req, res) =>{
    const {id} = req.params

    try {
        const existe = await Servicios.findByPk(id)

        if(!existe){
            const error = new Error("Servicio no Existe")
            return res.status(404).json({msg: error.message})
        }
    
        await Servicios.destroy({
            where:{
                id : id
            }
        })

        await Log.create({
            des_log : 'Servicio  :' + usuario.nom_usuario + ` elimina : ` + JSON.stringify(existe) 
        })     
        
        res.status(200).json({msg: "Servicio Eliminado"})

    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar el Rol - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}

const obtenerServicios = async (req, res) => {
    try {
        const {id_sede} = req.params
        const servicios = await Servicios.findAll({where:{id_sede}})
        return res.status(200).json(servicios)        
    } catch (error) {
        console.log(error)
    }
}


export{
    registrarServicio,
    editarServicio,
    eliminarServicio,
    obtenerServicios
}