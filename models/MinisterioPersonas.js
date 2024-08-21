import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Ministerios from "./Ministerios.js";
import FichaPersonal from "./FichaPersonal.js";
import Cargos from "./Cargos.js";

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
    id_cargo: {
      type: Sequelize.INTEGER,
    },
    est_activo: {
      type: Sequelize.INTEGER,
    },
    obs: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: true,
    tableName: "rel_ministerio_personas",
  }
);

MinisterioPersonas.belongsTo(FichaPersonal, {foreignKey : "id_personal"})
MinisterioPersonas.belongsTo(Ministerios, {foreignKey : "id_ministerio"})
MinisterioPersonas.belongsTo(Cargos, {foreignKey : "id_cargo"})


export default MinisterioPersonas