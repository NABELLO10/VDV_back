import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Clientes from "./Clientes.js";

const Cargos = db.define("mae_cargos",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: Sequelize.STRING,
    },
    est_activo: {
      type: Sequelize.INTEGER,
    },
    id_cliente: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
    tableName: "mae_cargos",
  }
);

Cargos.belongsTo(Clientes, {foreignKey : "id_cliente"})

export default Cargos