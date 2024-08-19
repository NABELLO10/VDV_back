import jwt from "jsonwebtoken"
import Usuarios from "../models/Usuarios.js"

const checkAuth = async (req, res, next) => {    
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1] // la convierte en un arreglo por lo que necesitamos la posicion 1
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            
            // creando sesion con info del veterianrio
            req.usuario = await Usuarios.findByPk(decoded.id)        
            return next()      

        } catch (error) {
            const e = new Error('Token no valido')
            res.status(403).json({msg : e.message})
        }      
    }

    if (!token){
        const error = new Error('Token Inexistente')
        res.status(403).json({msg : error.message})
    }   

    //next()
}

export default checkAuth