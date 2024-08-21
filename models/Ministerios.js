import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Sedes from "./Sedes.js";

const Ministerios = db.define("mae_ministerios",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_ministerio: {
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
    tableName: "mae_ministerios",
  }
);

Ministerios.belongsTo(Sedes, {foreignKey : "id_sede"})

export default Ministerios