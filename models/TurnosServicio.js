import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Servicios from "./Servicios.js";
import RolesServicio from "./RolesServicio.js";
import MinisterioPersonas from "./MinisterioPersonas.js";

const TurnosServicios = db.define("det_turnos_servicios",
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
    id_persona_ministerio: {
      type: Sequelize.INTEGER,
    },
    obs: {
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: true,
    tableName: "det_turnos_servicios",
  }
);

TurnosServicios.belongsTo(Servicios, {foreignKey : "id_servicio"})
TurnosServicios.belongsTo(RolesServicio, {foreignKey : "id_rol"})
TurnosServicios.belongsTo(MinisterioPersonas, {foreignKey : "id_persona_ministerio"})

export default TurnosServicios