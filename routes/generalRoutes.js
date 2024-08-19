import express from "express";
import checkAuth from "../middleware/authMiddleware.js";
import { 
    obtenerClientes
             } from "../controllers/generalController.js";

const router = express.Router()

router.get('/obtenerClientes', checkAuth, obtenerClientes)



export default router