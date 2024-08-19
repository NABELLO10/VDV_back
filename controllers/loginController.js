import bcrypt from "bcrypt"
import generarJWT from "../helpers/generarJWT.js"
import generarID from "../helpers/generarID.js"
import emailOlvidePassword from "../helpers/emailOlvidePassword.js"
import Usuarios from "../models/Usuarios.js"

const confirmar = async (req,res) => {
    try {
        const { token } = req.params

        const usuarioConfirmar = await Usuarios.findOne({ 
        where: {
            'token' : token
            }
        })
    
        if(!usuarioConfirmar){
            const error = new Error('Token no valido')
            return res.status(400).json({msg : error.message})
        }
    
        await Usuarios.update({
            token : null,
            confirmado : true
        },{
            where: { token : token }
        })   
        
        res.status(200).json({msg : "Cuenta Confirmada"})   

    } catch (error) {
        console.log(error)   
    }  
}


const login = async (req,res) => {
    try {

        const { email, password } = req.body

        const usuarioLogin = await Usuarios.findOne({
            where : {
                "email" : email
            }
        })
    
        if(!usuarioLogin){
            const error = new Error('Usuario no Existe')
            return res.status(400).json({msg : error.message})
        }
    
        if(!usuarioLogin.confirmado){
            const error = new Error('Cuenta no ha sido confirmada')
            return res.status(400).json({msg : error.message})
        }
    
        const coincidePassword  =  await bcrypt.compare(password, usuarioLogin.password)     
        if(!coincidePassword){
            const error = new Error('Contraseña Invalida')
            return res.status(400).json({msg : error.message})
        }
        
        res.json({
            id : usuarioLogin.id,
            nom_usuario : usuarioLogin.nom_usuario,
            email : usuarioLogin.email,
            token: generarJWT(usuarioLogin.id),
            id_perfil : usuarioLogin.id_perfil,
            id_cliente : usuarioLogin.id_cliente,        
            est_activo : usuarioLogin.est_activo
        })   
               

    } catch (error) {
        console.log(error)
    }   
}

const olvidePassword = async (req,res) => {
    const { email } = req.body

    const usuarioExiste = await Usuarios.findOne({
        where : {
            "email" : email
        }
    })

    if(!usuarioExiste){
        const error = new Error('Usuario no Existe')
        return res.status(400).json({msg : error.message})
    }


    try {

       await Usuarios.update({
            token : generarID()
        },{
            where:{ email : email }
        })
        
        const usuarioActualizado = await Usuarios.findOne({
            where : {
                "email" : email
            }
        })

        emailOlvidePassword({
            email,
            nombre : usuarioActualizado.nom_usuario,
            token : usuarioActualizado.token
        })
         

        res.status(200).json({msg: "Hemos enviado un email con instrucciones para recuperar tu contraseña"})

    } catch (error) {
        console.log(error)
    }
}


const comprobarToken = async (req,res) => {    
    const {token} = req.params
    try {
        const usuarioExiste = await Usuarios.findOne({
            where:{
                token : token
            }
        })

        if(!usuarioExiste){
            const error = new Error("Token no Valido")
            return res.status(400).json({msg : error.message})
        }

        res.json({msg: "Token Valido"})    

    } catch (error) {
        console.log(error)
    }        
}


const perfil = (req,res) => {
    const {usuario} = req     
    res.json(usuario)   
}


const nuevoPassword = async (req, res) =>{

    const {token} = req.params // URL
    const {password} = req.body //Lo que viene desde un formulario

    const usuarioExiste = await Usuarios.findOne({
        where:{
            token : token
        }
    })

    if (!usuarioExiste){
        const error = new Error("Token no Valido")
        return res.status(400).json({ msg : error.message})
    }

    try {       
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)      
       
        await Usuarios.update({
            token : null,
            password : hash,
            confirmado : true
        },{
            where:{ id : usuarioExiste.id }
        })

        res.json({msg : "Password Modificado!"})


    } catch (error) {
        console.log(error)
    }
}


const actualizarPassword = async (req,res) => {
   const {id, password} = req.usuario
   const {passwordActual, passwordNuevo2} = req.body

    //comprobar que usuario exista
    const usuario = await Usuarios.findByPk(id)

    try {
        if(!usuario){
            const error = new Error('Hubo un error')
            return res.status(400).json({msg : error.message})        
        }     
            
         if(await bcrypt.compare(passwordActual, password)){

            const salt = await bcrypt.genSalt(10)
            const passHash = await bcrypt.hash(passwordNuevo2, salt)
               
            await Usuarios.update({
                password : passHash          
            },{
                where:{ id : usuario.id }
            })
 
            res.json({msg : "Password Modificado!"})

        }else{
            const error = new Error('Password actual es incorrecto')
            return res.status(400).json({msg : error.message}) 
        } 
     } catch (error) {
        console.log(error)
    }    
}


export {
    login, perfil, confirmar, olvidePassword, comprobarToken, nuevoPassword, actualizarPassword
}
