import Finanzas from "../../models/Finanzas.js"

import TipoMovFinanzas from "../../models/TipoMovFinanzas.js"


const registrarFinanzas = async (req, res) => {
    const {id_sede, detalle, id_movimiento, monto_total, est_cancelado, fecha_vencimiento} = req.body

    try {                                  
        await Finanzas.create({
            id_sede, detalle, id_movimiento, monto_total, est_cancelado, fecha_vencimiento
        })      
                  
        //res.json({nuevaEmpresa})
        res.status(200).json({msg: "Movimiento Registrado!"})

    } catch (error) {
        console.log(error)            
    }      
}


const editarFinanzas =  async (req, res) =>{
    const {id} = req.params
    const {id_sede, detalle, id_movimiento, monto_total, est_cancelado, fecha_vencimiento} = req.body

    try {
        const rolExiste = await Finanzas.findByPk(id) 

        if(!rolExiste){
            const error = new Error("Movimiento no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await Finanzas.update({
            id_sede, detalle, id_movimiento, monto_total, est_cancelado, fecha_vencimiento
        },{
            where:{
                id : id
            }
        }) 

        //res.json(empresaActualizada)         
        res.status(200).json({msg: "Movimiento Actualizado"})
        //console.log(empresaActualizada)

    } catch (error) {
        console.log(error)            
    }      
}

const eliminarFinanzas = async (req, res) =>{
    const {id} = req.params

    try {
        const existe = await Finanzas.findByPk(id)

        if(!existe){
            const error = new Error("Movimiento no Existe")
            return res.status(404).json({msg: error.message})
        }
    
        await Finanzas.destroy({
            where:{
                id : id
            }
        })

        await Log.create({
            des_log : 'FINANZAS  :' + usuario.nom_usuario + ` elimina : ` + JSON.stringify(existe) 
        })     
        
        res.status(200).json({msg: "Movimiento Eliminado"})

    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar el movimiento - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}

const obtenerFinanzas = async (req, res) => {
    try {
        const {id_sede} = req.params
        const finanzas = await Finanzas.findAll(
            {where:{id_sede},
            include:[{model : TipoMovFinanzas}]},
            
        )
        return res.status(200).json(finanzas)        
    } catch (error) {
        console.log(error)
    }
}


export{
    registrarFinanzas,
    editarFinanzas,
    eliminarFinanzas,
    obtenerFinanzas
}