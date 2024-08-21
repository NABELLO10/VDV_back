import TurnosServicio from "../../models/TurnosServicio.js"
import Servicios from "../../models/Servicios.js"
import RolesServicio from "../../models/RolesServicio.js"
import MinisterioPersonas from "../../models/MinisterioPersonas.js"


const registrarTurno = async (req, res) => {
    const {id_servicio, id_rol, id_persona_ministerio} = req.body

    try {                                  
        await TurnosServicio.create({
            id_servicio, id_rol, id_persona_ministerio
        })      
                  
        //res.json({nuevaEmpresa})
        res.status(200).json({msg: "Turno Registrado!"})

    } catch (error) {
        console.log(error)            
    }      
}


const editarTurno =  async (req, res) =>{
    const {id} = req.params
    const {id_servicio, id_rol, id_persona_ministerio} = req.body

    try {
        const rolExiste = await TurnosServicio.findByPk(id) 

        if(!rolExiste){
            const error = new Error("Turno no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await TurnosServicio.update({
            id_servicio, id_rol, id_persona_ministerio
        },{
            where:{
                id : id
            }
        }) 

        //res.json(empresaActualizada)         
        res.status(200).json({msg: "Turno Actualizado"})
        //console.log(empresaActualizada)

    } catch (error) {
        console.log(error)            
    }      
}

const eliminarTurno = async (req, res) =>{
    const {id} = req.params

    try {
        const existe = await TurnosServicio.findByPk(id)

        if(!existe){
            const error = new Error("Turno no Existe")
            return res.status(404).json({msg: error.message})
        }
    
        await TurnosServicio.destroy({
            where:{
                id : id
            }
        })

        await Log.create({
            des_log : 'Turno Servicio  :' + usuario.nom_usuario + ` elimina : ` + JSON.stringify(existe) 
        })     
        
        res.status(200).json({msg: "Turno Eliminado"})

    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar el Rol - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}

const obtenerTurnos = async (req, res) => {
    try {
        const {id_servicio} = req.params
        const turnosServicio = await TurnosServicio.findAll(
            {where:{id_servicio},
            include:[{model : Servicios}, {model : RolesServicio}, {model : MinisterioPersonas}]},
            
        )
        return res.status(200).json(turnosServicio)        
    } catch (error) {
        console.log(error)
    }
}


export{
    registrarTurno,
    editarTurno,
    eliminarTurno,
    obtenerTurnos
}