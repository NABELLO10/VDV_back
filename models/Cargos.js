import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Sedes from "./Sedes.js";

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
    id_sede: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
    tableName: "mae_cargos",
  }
);

Cargos.belongsTo(Sedes, {foreignKey : "id_sede"})

export default Cargos