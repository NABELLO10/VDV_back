import Ciudades from "../models/Ciudades.js";
import Clientes from "../models/Clientes.js" 
import Log from "../models/Log.js";


const obtenerClientes = async (req, res) => {
    try {
        const clientes = await Clientes.findAll()
        return res.status(200).json(clientes)        
    } catch (error) {
        console.log(error)
    }
}


const registrarLogs = async (req, res) => {
    const { des_log } = req.body;
    try {
      await Log.create({
        des_log,
      });
      //res.json({nuevaEmpresa})
      res.status(200).json({ msg: "log registrado" });
    } catch (error) {
      console.log(error);
    }
  };
  

  const obtenerCiudades = async (req, res) => {
    try {
      const ciudades = await Ciudades.findAll({
        order: [[["nom_comuna", "ASC"]]],
      });
      return res.status(200).json(ciudades);
    } catch (error) {
      console.log(error);
    }
  };


export {
    obtenerClientes,
    registrarLogs,
    obtenerCiudades
}