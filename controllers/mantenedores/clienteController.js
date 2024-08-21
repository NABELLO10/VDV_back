import Clientes from "../../models/Clientes.js"


const registrarClientes = async (req, res) => {
    const {rut, nombre, est_activo, fecha_pago } = req.body

    try {      
        
        const existe = await Clientes.findOne({
            where: {
              rut
            },
          });
      
          if (existe) {
            const error = new Error("Cliente ya existe");
            return res.status(400).json({ msg: error.message });
          }

        await Clientes.create({
            rut, nombre, est_activo, fecha_pago 
        })      
           
        res.status(200).json({msg: "Cliente Registrado!"})

    } catch (error) {
        console.log(error)            
    }      
}


const editarClientes =  async (req, res) =>{
    const {id} = req.params
    const {rut, nombre, est_activo, fecha_pago} = req.body

    try {
        const rolExiste = await Clientes.findByPk(id) 

        if(!rolExiste){
            const error = new Error("Cliente no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await Clientes.update({
            rut, nombre, est_activo, fecha_pago
        },{
            where:{
                id : id
            }
        }) 

        //res.json(empresaActualizada)         
        res.status(200).json({msg: "Cliente Actualizado"})
        //console.log(empresaActualizada)

    } catch (error) {
        console.log(error)            
    }      
}

const eliminarClientes = async (req, res) =>{
    const {id} = req.params

    try {
        const existe = await Clientes.findByPk(id)

        if(!existe){
            const error = new Error("Cliente no Existe")
            return res.status(404).json({msg: error.message})
        }
    
        await Clientes.destroy({
            where:{
                id : id
            }
        })

        await Log.create({
            des_log : 'Clientes  :' + usuario.nom_usuario + ` elimina : ` + JSON.stringify(existe) 
        })     
        
        res.status(200).json({msg: "Cliente Eliminado"})

    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar el Inscripción - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}

const obtenerClientes = async (req, res) => {
    try {       
        const clientes = await Clientes.findAll()
        return res.status(200).json(clientes)        
    } catch (error) {
        console.log(error)
    }
}


export{
    registrarClientes,
    editarClientes,
    eliminarClientes,
    obtenerClientes
}