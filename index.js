import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//BASE DE DATOS
import db from "./config/db.js";
import exportarModelos from "./config/ExportarModelos.js";


//ROUTES
 import loginRoutes from "./routes/loginRoutes.js"
 import crudRoutes from "./routes/crudRoutes.js"
 import generalRoutes from "./routes/generalRoutes.js"
//import procesosRoutes from "./routes/procesosRoutes.js"  


//Tareas programadas
/* import './controllers/tareas/agregarPeriodo.js'
import './controllers/tareas/calcularVacaciones.js'
import './controllers/tareas/recordarPagos.js'
import './controllers/tareas/pagoProveedores.js' */


//aqui se crea la aplicacion de express
const app = express();

//le decimos que enviaremos datos de tipo json
app.use(express.json());

//busca y agrega el archivo .env
dotenv.config();

//Veriricando modelos al inciar si no existe los crea
exportarModelos();

//conectando a base de datos con sequelize
db.sync()
  .then(() => {
    console.log("BD conectada");
  })
  .catch((error) => {
    console.log(error);
  });

//  Cualquiera pueda soliictar
app.use(cors());

 app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  }); 
   
  
  //ROUTES
 app.use('/api-vdv/', loginRoutes)
 app.use("/api-vdv/crud/", crudRoutes);
 app.use("/api-vdv/general/", generalRoutes);
//app.use("/api-vdv/procesos/", procesosRoutes);  

//PUERTOS
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor en puerto ${PORT}`);
});
