import TipoCompromisos from "../../models/TipoCompromisos.js"
import Log from "../../models/Log.js"

const registrarTipoCompromisos = async (req, res) => {
    const {nom_tipo, id_sede} = req.body

    try {  
        const existe = await TipoCompromisos.findOne({
            where:{
                nom_tipo,
                id_sede
            }
        }) 

        if(existe){
            const error = new Error("Tipo ya existe")
            return res.status(400).json({msg : error.message})
        }
                         
        await TipoCompromisos.create({
            nom_tipo,
            id_sede
        })      
      
        res.status(200).json({msg: "Tipo Registrado"})

    } catch (error) {
        console.log(error)            
    }      
}


const eliminarTipoCompromisos = async (req, res) =>{
    const {usuario} = req
    const { id } = req.params;

    try {
        const existe =  await TipoCompromisos.findByPk(id)

        if(!existe){
            const error = new Error("ID de tipo inexistente")
            return res.status(400).json({msg: error.message})
        }

        await Log.create({
            des_log : 'Tipo compromiso  :' + usuario.nom_usuario + ` elimina : ` + JSON.stringify(existe) 
        }) 
    

        await TipoCompromisos.destroy({
            where:{
                id : id
            }
        })

    res.status(200).json({msg: "Tipo Eliminado"})
    
    } catch (error) {    
        // Verificar si es un error de restricción de clave foránea
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            // El código '23503' es específico de error de FK en PostgreSQL
             res.status(409).json({ msg: "No se puede eliminar el Tipo - relacion existente con otro registro" });
        }
        console.error(error);
    }       
}


const editarTipoCompromisos =  async (req, res) =>{
    const {id} = req.params
    const {nom_tipo} = req.body

    try {
        const existe = await TipoCompromisos.findByPk(id) 

        if(!existe){
            const error = new Error("Tipo no existe")
            return res.status(400).json({msg : error.message})
        }      
                    
        await TipoCompromisos.update({
            nom_tipo
        },{
            where:{
                id : id
            }
        })     
        res.status(200).json({msg: "Tipo Actualizado"})   

    } catch (error) {
        console.log(error)            
    }      
}

const obtenerTipoCompromisos = async (req, res) => {
    try {
        const {id_sede} = req.params
        const tipos = await TipoCompromisos.findAll({
            where:{id_sede}
        })
        return res.status(200).json(tipos)        
    } catch (error) {
        console.log(error)
    }
}


export{
    registrarTipoCompromisos,
    editarTipoCompromisos,
    eliminarTipoCompromisos,
    obtenerTipoCompromisos
}