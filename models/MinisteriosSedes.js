import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Sedes from "./Sedes.js";
import Ministerios from "./Ministerios.js";

const MinisterioSedes = db.define("rel_ministerio_sedes",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_ministerio: {
      type: Sequelize.INTEGER,
    },
    id_sede: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
    tableName: "rel_ministerio_sedes",
  }
);

MinisterioSedes.belongsTo(Sedes, {foreignKey : "id_sede"})
MinisterioSedes.belongsTo(Ministerios, {foreignKey : "id_ministerio"})


export default MinisterioSedes