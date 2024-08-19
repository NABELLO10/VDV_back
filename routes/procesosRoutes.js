import express from "express";
import checkAuth from "../middleware/authMiddleware.js";

import { 
        registrarMovTurnos,
        editarMovTurnos,
        obtenerMovTurnos,
        eliminarMovTurno,
        obtenerMovTurnosPersona,
        IniciarTurno, TerminarTurno, 
        editarFallaTurnos
    } from "../controllers/procesos/movTurnosController.js";

    import { 
        registrarMovVeh,
        obtenerMovVeh
    } from "../controllers/procesos/gestionVehiculosController.js";
   
    import { 
        editarSaldo,
        obtenerSaldos,
        obtenerSaldosPersonal,
        registrarSaldo
    } from "../controllers/procesos/saldoPermisosController.js";
   
    import { 
        registrarMovPersonal,
        editarMovPersonal,
        obtenerMov,
        obtenerMovGral
    } from "../controllers/procesos/movPersonalController.js";

    import { 
        registrarMovFinanzas,
        editarMovFinanzas,
        eliminarMovFinanzas,
        obtenerMovFinanzas      
    } from "../controllers/procesos/movFinanzasController.js";
    
    import { 
        registrarSeguroPersonal,
        eliminarSeguroPersonal,
        obtenerSeguroPersonal
    } from "../controllers/procesos/segurosPersonasController.js";

const router = express.Router()

router.post('/movturnos', checkAuth, registrarMovTurnos)
router.put('/movturnos/:id', checkAuth, editarMovTurnos)
router.put('/fallaTurno/:id', checkAuth, editarFallaTurnos)

router.put('/iniciarTurno/:id', checkAuth, IniciarTurno)
router.put('/terminarTurno/:id', checkAuth, TerminarTurno)

router.delete('/movturnos/:id', checkAuth, eliminarMovTurno)
router.get('/obtener-movturnos/:empresa/:desde/:hasta', checkAuth, obtenerMovTurnos)
router.get('/turno-persona/:empresa/:fec_turno/:id_personal', checkAuth, obtenerMovTurnosPersona)

router.post('/gestionVeh', checkAuth, registrarMovVeh)
router.get('/gestionVeh/:empresa/:desde/:hasta', checkAuth, obtenerMovVeh)

router.post('/saldos/', checkAuth, registrarSaldo)
router.put('/saldos/:id', checkAuth, editarSaldo)
router.get('/saldosPersonal/:id_personal', checkAuth, obtenerSaldos)
router.get('/saldos/:id_personal/:id_periodo/:item', checkAuth, obtenerSaldosPersonal)

router.post('/movPersonal', checkAuth, registrarMovPersonal)
router.put('/movPersonal/:id', checkAuth, editarMovPersonal)
router.get('/movPersonal/:id_personal', checkAuth, obtenerMov)
router.get('/movPersonalGral/:id_personal/:item/:periodo', checkAuth, obtenerMovGral)

router.post('/finanzas', checkAuth, registrarMovFinanzas)
router.put('/finanzas/:id', checkAuth, editarMovFinanzas)
router.delete('/finanzas/:id', checkAuth, eliminarMovFinanzas)
router.get('/finanzas/:id_empresa/:desde/:hasta/:est_cerrado', checkAuth, obtenerMovFinanzas)

router.post('/finanzas', checkAuth, registrarSeguroPersonal)
router.delete('/finanzas/:id', checkAuth, eliminarSeguroPersonal)
router.get('/finanzas/:id_personal', checkAuth, obtenerSeguroPersonal)

export default router