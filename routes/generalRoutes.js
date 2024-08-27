import express from "express";
import checkAuth from "../middleware/authMiddleware.js";
import { 
    obtenerClientes,
    obtenerCiudades
             } from "../controllers/generalController.js";

const router = express.Router()

router.get('/obtenerClientes', checkAuth, obtenerClientes)
router.get('/ciudades', checkAuth, obtenerCiudades)



export default router