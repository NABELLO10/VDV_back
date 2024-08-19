import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Servicios from "./Servicios.js";
import RolesServicio from "./RolesServicio.js";

const TurnosServicios = db.define("mov_turnos_servicios",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_servicio: {
      type: Sequelize.INTEGER,
    },
    id_rol: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
    tableName: "mov_turnos_servicios",
  }
);

TurnosServicios.belongsTo(Servicios, {foreignKey : "id_servicio"})
TurnosServicios.belongsTo(RolesServicio, {foreignKey : "id_rol"})

export default TurnosServicios