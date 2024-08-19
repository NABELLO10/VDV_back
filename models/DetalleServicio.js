import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Servicios from "./Servicios.js";

const DetalleServicio = db.define("det_servicio",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },  
    id_servicio: {
      type: Sequelize.INTEGER,
    },
    total_personas: {
        type: Sequelize.INTEGER,
    },
    total_adultos: {
        type: Sequelize.INTEGER,
    },
    total_nños: {
        type: Sequelize.INTEGER,
    },
    total_visitas: {
      type: Sequelize.INTEGER,
    },
    bautizmos: {
      type: Sequelize.INTEGER,
    },
    ofrenda: {
      type: Sequelize.INTEGER,
    },
    diezmo: {
      type: Sequelize.INTEGER,
    },    
  },
  {
    timestamps: true,
    tableName: "det_servicio",
  }
);

DetalleServicio.belongsTo(Servicios, {foreignKey : "id_servicio"})


export default DetalleServicio