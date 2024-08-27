import express from "express";
import checkAuth from "../middleware/authMiddleware.js";

//REGISTRAR USUARIOS ------------------------------------------------------------------------//
import {
  registrar,
  listarUsuarios,
  actualizarUsuario,
  eliminarUsuario,
} from "../controllers/mantenedores/usuariosController.js";

//REGISTRAR PERFiLES ------------------------------------------------------------------------//
import {
  registrarPerfil,
  editarPerfil,
  eliminarPerfil,
  obtenerPerfiles
} from "../controllers/mantenedores/perfilesController.js";

//REGISTRAR SEDES ------------------------------------------------------------------------//
import {
  registrarSede,
  editarSede,
  eliminarSede,
  obtenerSedes,
  obtenerSedesCliente,
} from "../controllers/mantenedores/sedesController.js";

//REGISTRAR CARGOS ------------------------------------------------------------------------//
import {
    registrarCargo,
    eliminarCargo,
    editarCargo,
    obtenerCargos
} from "../controllers/mantenedores/cargosController.js";

//REGISTRAR NACIONALIDADES ------------------------------------------------------------------------//
import {
    registrarNacionalidad, 
    eliminarNacionalidad, 
    editarNacionalidad, 
    obtenerNacionalidades
} from "../controllers/mantenedores/nacionalidadController.js";

//REGISTRAR PERSONAS ------------------------------------------------------------------------//
import {
    registrarPersonal,
    editarPersonal,  
    eliminarPersonal,
    obtenerPersonas
} from "../controllers/mantenedores/fichaPersonalController.js";

//REGISTRAR TIPO COMPROMISOS ------------------------------------------------------------------------//
import {
    registrarTipoCompromisos,
    editarTipoCompromisos,
    eliminarTipoCompromisos,
    obtenerTipoCompromisos
} from "../controllers/mantenedores/tipoCompromisoController.js";

//REGISTRAR TIPO MOV FINANZAS ------------------------------------------------------------------------//
import {
    registrarTipoMovFinanzas,
    editarTipoMovFinanzas,
    eliminarTipoMovFinanzas,
    obtenerTipoMovFinanzas
} from "../controllers/mantenedores/tipoMovFinanzasController.js";

//REGISTRAR PERSONAS COMPROMISOS------------------------------------------------------------------------//
import {
    registrarPersonaCompromiso,
    editarPersonaCompromiso,
    eliminarPersonaCompromiso,
    obtenerPersonasCompromisos
} from "../controllers/mantenedores/personasCompromisosController.js";

//DETALLE COMPROMISOS------------------------------------------------------------------------//
import {
    registrarDetalleCompromiso,
    editarDetalleCompromiso,
    eliminarDetalleCompromiso,
    obtenerDetalleCompromiso
} from "../controllers/mantenedores/detPersonasCompromisosController.js";

// USUARIO SEDESS------------------------------------------------------------------------//
import {
    registrarUsuarioSedes,
    editarUsuarioSedes,
    eliminarUsuarioSedes,
    obtenerUsuarioSedes
} from "../controllers/mantenedores/usuarioSedesController.js";

// MINISTERIOS------------------------------------------------------------------------//
import {
    registrarMinisterio,
    editarMinisterio,
    eliminarMinisterio,
    obtenerMinisterios
} from "../controllers/mantenedores/ministeriosController.js";

// MINISTERIOS PERSONAS------------------------------------------------------------------------//
import {
    registrarPersonasMinisterios,
    editarMinisteriosPersonas,
    eliminarPersonasMinisterios,
    obtenerPersonasMinisterios
} from "../controllers/mantenedores/ministerioPersonasController.js";

// ROLES PERSONAS ------------------------------------------------------------------------//
import {
    registrarRol,
    editarRol,
    eliminarRol,
    obtenerRolesServicio
} from "../controllers/mantenedores/rolesServicioController.js";

// SERVICIOS ------------------------------------------------------------------------//
import {
    registrarServicio,
    editarServicio,
    eliminarServicio,
    obtenerServicios
} from "../controllers/mantenedores/serviciosController.js";

// TURNOS SERVICIOS ------------------------------------------------------------------------//
import {
    registrarTurno,
    editarTurno,
    eliminarTurno,
    obtenerTurnos
} from "../controllers/mantenedores/turnosServiciosController.js";

// FINANZAS ------------------------------------------------------------------------//
import {
    registrarFinanzas,
    editarFinanzas,
    eliminarFinanzas,
    obtenerFinanzas
} from "../controllers/mantenedores/finanzasController.js";

// EVENTOS ------------------------------------------------------------------------//
import {
    registrarEventos,
    editarEventos,
    eliminarEventos,
    obtenerEventos
} from "../controllers/mantenedores/eventosController.js";

// EVENTOS ------------------------------------------------------------------------//
import {
    registrarInscripciones,
    editarInscripciones,
    eliminarInscripciones,
    obtenerInscripciones
} from "../controllers/mantenedores/inscripcionesController.js";

// DETALLE SERVICIO ------------------------------------------------------------------------//
import {
    registrarDetalleServicio,
    editarDetalleServicio,
    eliminarDetalleServicio,
    obtenerDetalleServicio
} from "../controllers/mantenedores/detServicioController.js";

// CLIENTES  ------------------------------------------------------------------------//
import {
    registrarClientes,
    editarClientes,
    eliminarClientes,
    obtenerClientes
} from "../controllers/mantenedores/clienteController.js";

// CONTACTO CLIENTES  ------------------------------------------------------------------------//
import {
    registrarContactoClientes,
    editarContactoClientes,
    eliminarContactoClientes,
    obtenerContactoClientes
} from "../controllers/mantenedores/contactoClientesController.js";


const router = express.Router();

//REGISTRAR USUARIOS -------------------------------------------------//
router.post("/registrar", checkAuth, registrar);
router.put("/registrar/:id", checkAuth, actualizarUsuario);
router.delete("/registrar/:id", checkAuth, eliminarUsuario);
router.get("/obtener-usuarios/:id_cliente", checkAuth, listarUsuarios);

//PERFLES ------------------------------------------------------//
router.post("/perfil", checkAuth, registrarPerfil);
router.put("/perfil/:id", checkAuth, editarPerfil);
router.delete("/perfil/:id", checkAuth, eliminarPerfil);
router.get("/obtener-perfil/:id_cliente", checkAuth, obtenerPerfiles);

// SEDES   ------------------------------------------------------//
router.post("/sedes", checkAuth, registrarSede);
router.put("/sedes/:id", checkAuth, editarSede);
router.delete("/sedes/:id", checkAuth, eliminarSede);
router.get("/sedes", checkAuth, obtenerSedes);
router.get("/sedes/:id_cliente", checkAuth, obtenerSedesCliente);

// CARGOS   ------------------------------------------------------//
router.post("/cargos", checkAuth, registrarCargo);
router.put("/cargos/:id", checkAuth, editarCargo);
router.delete("/cargos/:id", checkAuth, eliminarCargo);
router.get("/cargos/:id_cliente", checkAuth, obtenerCargos);

// NACIONALIDADES   ------------------------------------------------------//
router.post("/nacionalidad", checkAuth, registrarNacionalidad);
router.put("/nacionalidad/:id", checkAuth, editarNacionalidad);
router.delete("/nacionalidad/:id", checkAuth, eliminarNacionalidad);
router.get("/nacionalidades/:id_cliente", checkAuth, obtenerNacionalidades);

// PERSONAS   ------------------------------------------------------//
router.post("/persona", checkAuth, registrarPersonal);
router.put("/persona/:id", checkAuth, editarPersonal);
router.delete("/persona/:id", checkAuth, eliminarPersonal);
router.get("/personas/:id_cliente", checkAuth, obtenerPersonas);

// TIPO COMPROMISOS   ------------------------------------------------------//
router.post("/tipoCompromiso", checkAuth, registrarTipoCompromisos);
router.put("/tipoCompromiso/:id", checkAuth, editarTipoCompromisos);
router.delete("/tipoCompromiso/:id", checkAuth, eliminarTipoCompromisos);
router.get("/tipoCompromisos/:id_cliente", checkAuth, obtenerTipoCompromisos);

// TIPO MOV FINANZAS   ------------------------------------------------------//
router.post("/finanzas", checkAuth, registrarTipoMovFinanzas);
router.put("/finanzas/:id", checkAuth, editarTipoMovFinanzas);
router.delete("/finanzas/:id", checkAuth, eliminarTipoMovFinanzas);
router.get("/finanzas/:id_cliente", checkAuth, obtenerTipoMovFinanzas);

// PERSONAS COMPROMISOS   ------------------------------------------------------//
router.post("/personasCompromisos", checkAuth, registrarPersonaCompromiso);
router.put("/personasCompromisos/:id", checkAuth, editarPersonaCompromiso);
router.delete("/personasCompromisos/:id", checkAuth, eliminarPersonaCompromiso);
router.get("/personasCompromisos/:id_personal", checkAuth, obtenerPersonasCompromisos);

// PERSONAS COMPROMISOS   ------------------------------------------------------//
router.post("/detalleCompromiso", checkAuth, registrarDetalleCompromiso);
router.put("/detalleCompromiso/:id", checkAuth, editarDetalleCompromiso);
router.delete("/detalleCompromiso/:id", checkAuth, eliminarDetalleCompromiso);
router.get("/detalleCompromiso/:id_persona_compromiso", checkAuth, obtenerDetalleCompromiso);

// USUARIO SEDES   ------------------------------------------------------//
router.post("/usuarioSedes", checkAuth, registrarUsuarioSedes);
router.put("/usuarioSedes/:id", checkAuth, editarUsuarioSedes);
router.delete("/usuarioSedes/:id", checkAuth, eliminarUsuarioSedes);
router.get("/usuarioSedes/:id_sede", checkAuth, obtenerDetalleCompromiso);

// MINISTERIOS   ------------------------------------------------------//
router.post("/ministerio", checkAuth, registrarMinisterio);
router.put("/ministerio/:id", checkAuth, editarMinisterio);
router.delete("/ministerio/:id", checkAuth, eliminarMinisterio);
router.get("/ministerios/:id_sede", checkAuth, obtenerMinisterios);

// MINISTERIOS PERSONAS  ------------------------------------------------------//
router.post("/ministerioPersonas", checkAuth, registrarPersonasMinisterios);
router.put("/ministerioPersonas/:id", checkAuth, editarMinisteriosPersonas);
router.delete("/ministerioPersonas/:id", checkAuth, eliminarPersonasMinisterios);
router.get("/ministerioPersonas/:id_ministerio", checkAuth, obtenerPersonasMinisterios);

// ROLES SERVICIO  ------------------------------------------------------//
router.post("/rolServicio", checkAuth, registrarRol);
router.put("/rolServicio/:id", checkAuth, editarRol);
router.delete("/rolServicio/:id", checkAuth, eliminarRol);
router.get("/rolServicio/:id_sede", checkAuth, obtenerRolesServicio);

// SERVICIOS  ------------------------------------------------------//
router.post("/servicios", checkAuth, registrarServicio);
router.put("/servicios/:id", checkAuth, editarServicio);
router.delete("/servicios/:id", checkAuth, eliminarServicio);
router.get("/servicios/:id_sede", checkAuth, obtenerServicios);

// TURNOS SERVICIOS  ------------------------------------------------------//
router.post("/turnosServicios", checkAuth, registrarTurno);
router.put("/turnosServicios/:id", checkAuth, editarTurno);
router.delete("/turnosServicios/:id", checkAuth, eliminarTurno);
router.get("/turnosServicios/:id_servicio", checkAuth, obtenerTurnos);

// FINANZAS  ------------------------------------------------------//
router.post("/finanzas", checkAuth, registrarFinanzas);
router.put("/finanzas/:id", checkAuth, editarFinanzas);
router.delete("/finanzas/:id", checkAuth, eliminarFinanzas);
router.get("/finanzas/:id_servicio", checkAuth, obtenerFinanzas);

// EVENTOS  ------------------------------------------------------//
router.post("/finanzas", checkAuth, registrarEventos);
router.put("/finanzas/:id", checkAuth, editarEventos);
router.delete("/finanzas/:id", checkAuth, eliminarEventos);
router.get("/finanzas/:id_servicio", checkAuth, obtenerEventos);

// INSCRIPCIONES  ------------------------------------------------------//
router.post("/inscripciones", checkAuth, registrarInscripciones);
router.put("/inscripciones/:id", checkAuth, editarInscripciones);
router.delete("/inscripciones/:id", checkAuth, eliminarInscripciones);
router.get("/inscripciones/:id_servicio", checkAuth, obtenerInscripciones);

// DETALLE SERVICIO  ------------------------------------------------------//
router.post("/detServicio", checkAuth, registrarDetalleServicio);
router.put("/detServicio/:id", checkAuth, editarDetalleServicio);
router.delete("/detServicio/:id", checkAuth, eliminarDetalleServicio);
router.get("/detServicio/:id_servicio", checkAuth, obtenerDetalleServicio);

// CLIENTES  ------------------------------------------------------//
router.post("/clientes", checkAuth, registrarClientes);
router.put("/clientes/:id", checkAuth, editarClientes);
router.delete("/clientes/:id", checkAuth, eliminarClientes);
router.get("/clientes", checkAuth, obtenerClientes);

// CONTACTO CLIENTES  ------------------------------------------------------//
router.post("/contactoClientes", checkAuth, registrarContactoClientes);
router.put("/contactoClientes/:id", checkAuth, editarContactoClientes);
router.delete("/contactoClientes/:id", checkAuth, eliminarContactoClientes);
router.get("/contactoClientes/:id_servicio", checkAuth, obtenerContactoClientes);



export default router;