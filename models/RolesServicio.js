import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Sedes from "./Sedes.js";

const RolesServicio = db.define("mae_roles_servicios",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_rol: {
      type: Sequelize.STRING,
    },  
    id_sede: {
      type: Sequelize.INTEGER,
    },
    est_activo: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
    tableName: "mae_roles_servicios",
  }
);

RolesServicio.belongsTo(Sedes, {foreignKey : "id_sede"})

export default RolesServicio