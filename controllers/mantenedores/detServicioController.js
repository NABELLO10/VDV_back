import DetalleServicio from "../../models/DetalleServicio.js"
import Servicios from "../../models/Servicios.js"


const registrarDetalleServicio = async (req, res) => {
    const {id_servicio, total_personas, total_adultos, total_nños, total_visitas, bautizmos, ofrenda, diezmo} = req.body

    try {                                  
        await DetalleServicio.create({
            id_servicio, total_personas, total_adultos, total_nños, total_visitas, bautizmos, ofrenda, diezmo
        })      
           
        res.status(200).json({msg: "Detalle Registrado!"})

    } catch (error) {
        console.log(error)            
    }      
}


const editarDetalleServicio =  async (req, res) =>{
    const {id} = req.params
    const {id_servicio, total_personas, total_adultos, total_nños, total_visitas, bautizmos, ofrenda, diezmo} = req.body

    try {
        const rolExiste = await DetalleServicio.findByPk(id) 

        if(!rolExiste){
            const error = new Error("Detalle no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await DetalleServicio.update({
            id_servicio, total_personas, total_adultos, total_nños, total_visitas, bautizmos, ofrenda, diezmo
        },{
            where:{
                id : id
            }
        }) 

        //res.json(empresaActualizada)         
        res.status(200).json({msg: "Detalle Actualizado"})
        //console.log(empresaActualizada)

    } catch (error) {
        console.log(error)            
    }      
}

const eliminarDetalleServicio = async (req, res) =>{
    const {id} = req.params

    try {
        const existe = await DetalleServicio.findByPk(id)

        if(!existe){
            const error = new Error("Detalle no Existe")
            return res.status(404).json({msg: error.message})
        }
    
        await DetalleServicio.destroy({
            where:{
                id : id
            }
        })

        await Log.create({
            des_log : 'DetalleServicio  :' + usuario.nom_usuario + ` elimina : ` + JSON.stringify(existe) 
        })     
        
        res.status(200).json({msg: "Detalle Eliminado"})

    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar el Inscripción - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}

const obtenerDetalleServicio = async (req, res) => {
    try {
        const {id_servicio} = req.params
        const detalleServicio = await DetalleServicio.findAll(
            {where:{id_servicio}, includes:[{model: Servicios}]},
            
        )
        return res.status(200).json(detalleServicio)        
    } catch (error) {
        console.log(error)
    }
}


export{
    registrarDetalleServicio,
    editarDetalleServicio,
    eliminarDetalleServicio,
    obtenerDetalleServicio
}