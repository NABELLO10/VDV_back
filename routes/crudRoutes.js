import express from "express";
import checkAuth from "../middleware/authMiddleware.js";

//REGISTRAR USUARIOS ------------------------------------------------------------------------//
import { registrar, 
    listarUsuarios, 
    actualizarUsuario,
    eliminarUsuario,
    obtenerPerfiles
 } from "../controllers/mantenedores/usuariosController.js";

//REGISTRAR PERFiLES ------------------------------------------------------------------------//
    import { 
        registrarPerfil,
        editarPerfil,
        eliminarPerfil } from "../controllers/mantenedores/perfilesController.js";



//-----------------------------------------------------------------------------------------------------------------------------
const router = express.Router();

//REGISTRAR USUARIOS ------------------------------------------------------------------------//
router.post("/registrar", checkAuth, registrar)
router.put("/registrar/:id", checkAuth, actualizarUsuario)
router.delete("/registrar/:id", checkAuth, eliminarUsuario)
router.get("/obtener-usuarios/:id_cliente", checkAuth, listarUsuarios)
router.get('/obtener-perfil/:id_cliente', checkAuth, obtenerPerfiles) 



//PERFLES ------------------------------------------------------------------------//
router.post("/perfil", checkAuth, registrarPerfil)
router.put("/perfil/:id", checkAuth, editarPerfil)
router.delete("/perfil/:id", checkAuth, eliminarPerfil)




export default router