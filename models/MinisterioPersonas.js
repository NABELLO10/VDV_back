import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Ministerios from "./Ministerios.js";
import FichaPersonal from "./FichaPersonal.js";

const MinisterioPersonas = db.define("rel_ministerio_personas",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_ministerio: {
      type: Sequelize.INTEGER,
    },
    id_personal: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
    tableName: "rel_ministerio_personas",
  }
);

MinisterioPersonas.belongsTo(FichaPersonal, {foreignKey : "id_personal"})
MinisterioPersonas.belongsTo(Ministerios, {foreignKey : "id_ministerio"})


export default MinisterioPersonas