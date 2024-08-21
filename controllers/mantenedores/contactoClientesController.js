import ContactoClientes from "../../models/ContactoClientes.js"


const registrarContactoClientes = async (req, res) => {
    const {nom_contacto, mail, fono, id_cliente} = req.body

    try {      
        
        const existe = await ContactoClientes.findOne({
            where: {
              nom_contacto
            },
          });
      
          if (existe) {
            const error = new Error("Contacto ya existe");
            return res.status(400).json({ msg: error.message });
          }

        await ContactoClientes.create({
            nom_contacto, mail, fono, id_cliente
        })      
           
        res.status(200).json({msg: "Contacto Registrado!"})

    } catch (error) {
        console.log(error)            
    }      
}


const editarContactoClientes =  async (req, res) =>{
    const {id} = req.params
    const {  nom_contacto, mail, fono, id_cliente} = req.body

    try {
        const rolExiste = await ContactoClientes.findByPk(id) 

        if(!rolExiste){
            const error = new Error("Contacto no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await ContactoClientes.update({
            nom_contacto, mail, fono, id_cliente
        },{
            where:{
                id : id
            }
        }) 

        //res.json(empresaActualizada)         
        res.status(200).json({msg: "Contacto Actualizado"})
        //console.log(empresaActualizada)

    } catch (error) {
        console.log(error)            
    }      
}

const eliminarContactoClientes = async (req, res) =>{
    const {id} = req.params

    try {
        const existe = await ContactoClientes.findByPk(id)

        if(!existe){
            const error = new Error("Contacto no Existe")
            return res.status(404).json({msg: error.message})
        }
    
        await ContactoClientes.destroy({
            where:{
                id : id
            }
        })

        await Log.create({
            des_log : 'ContactoClientes  :' + usuario.nom_usuario + ` elimina : ` + JSON.stringify(existe) 
        })     
        
        res.status(200).json({msg: "Contacto Eliminado"})

    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar el Inscripción - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}

const obtenerContactoClientes = async (req, res) => {
    try {       
        const contactoClientes = await ContactoClientes.findAll()
        return res.status(200).json(contactoClientes)        
    } catch (error) {
        console.log(error)
    }
}


export{
    registrarContactoClientes,
    editarContactoClientes,
    eliminarContactoClientes,
    obtenerContactoClientes
}