import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Clientes from "./Clientes.js";

const Sedes = db.define("mae_sedes",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_sede: {
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
    tableName: "mae_sedes",
  }
);

Sedes.belongsTo(Clientes, {foreignKey : "id_cliente"})

export default Sedes