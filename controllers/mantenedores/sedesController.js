import Sedes from "../../models/Sedes.js"
import Log from "../../models/Log.js"
import Ciudades from "../../models/Ciudades.js"

const registrarSede = async (req,res) => {          
        const {nom_sede, id_ciudad, direccion, est_activo, id_cliente} = req.body

        try {  
            const existe = await Sedes.findOne({
                where:{
                    nom_sede, 
                    id_cliente
                }
            }) 

            if(existe){
                const error = new Error("Sede ya existe")
                return res.status(400).json({msg : error.message})
            }
                             
           await Sedes.create({
                nom_sede, id_ciudad, direccion, est_activo, id_cliente
            })                      
        
            res.status(200).json({msg: "Sede Registrada!"})

        } catch (error) {
            console.log(error)            
        }      
}


const editarSede = async (req,res) => {          
    const { id } = req.params;
    const {nom_sede, id_ciudad, direccion, est_activo, id_cliente} = req.body

    try {
        const existe = await Sedes.findOne({
            where:{
                id : id
            }
        }) 

        if(!existe){
            const error = new Error("Sede no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
       await Sedes.update({
        nom_sede, id_ciudad, direccion, est_activo, id_cliente
        },{
            where:{
                id : id
            }
        })           

        res.status(200).json({msg: "Sede Actualizada"})
       
    } catch (error) {
        console.log(error)            
    }      
}


const eliminarSede = async (req, res) =>{
    const {usuario} = req
    const {id} = req.params

    try {
        const existe = await Sedes.findByPk(id)

        if(!existe){
            const error = new Error("Sede no Existe")
            return res.status(404).json({msg: error.message})
        }
    
        await Sedes.destroy({
            where:{
                id : id
            }
        })

        await Log.create({
            des_log : 'Sede  :' + usuario.nom_usuario + ` elimina la sede: ` + JSON.stringify(existe) 
        }) 
    
        res.status(200).json({msg: "Sede Eliminada"})

    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar la sede - relacion existente con otro registro" });
        }
        console.error(error);
    }     
}   

const obtenerSedes = async (req, res) => {
    try {
        const sedes = await Sedes.findAll({ include: [{ model: Ciudades}]})
        return res.status(200).json(sedes)        
    } catch (error) {
        console.log(error)
    }
}

const obtenerSedesCliente = async (req, res) => {
    try {
        const {id_cliente} = req.params
        const sedes = await Sedes.findAll({where:{id_cliente}, include: [{ model: Ciudades}]})

        return res.status(200).json(sedes);        
    } catch (error) {
        console.log(error)
    }
}



export{
    registrarSede,
    editarSede,
    eliminarSede,
    obtenerSedes,
    obtenerSedesCliente
}
