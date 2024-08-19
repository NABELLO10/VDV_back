import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Clientes from "./Clientes.js";

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
    id_cliente: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
    tableName: "mae_roles_servicios",
  }
);

RolesServicio.belongsTo(Clientes, {foreignKey : "id_cliente"})

export default RolesServicio