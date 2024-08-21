import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Sedes from "./Sedes.js";

const Servicios = db.define("mov_servicios",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_servicio: {
      type: Sequelize.STRING,
    },
    fecha_servicio: {
      type: Sequelize.STRING,
    },
    id_sede: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
    tableName: "mov_servicios",
  }
);

Servicios.belongsTo(Sedes, {foreignKey : "id_sede"})

export default Servicios