import { Sequelize } from "sequelize";
import db from "../config/db.js";

import TurnosServicio from "./TurnosServicio.js";
import FichaPersonal from "./FichaPersonal.js";

const RolesPersonas = db.define("mov_roles_personas",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },  
    id_turno_servicio: {
      type: Sequelize.INTEGER,
    },
    id_personal: {
      type: Sequelize.INTEGER,
    },
    est_confirmado: {
      type: Sequelize.INTEGER,
    },
    est_reeemplazo: {
      type: Sequelize.INTEGER,
    },
    obs: {
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: true,
    tableName: "mov_roles_personas",
  }
);

RolesPersonas.belongsTo(TurnosServicio, {foreignKey : "id_turno_servicio"})
RolesPersonas.belongsTo(FichaPersonal, {foreignKey : "id_personal"})

export default RolesPersonas