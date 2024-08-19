import { Sequelize } from "sequelize";
import db from "../config/db.js";

import FichaPersonal from "./FichaPersonal.js";
import TipoCompromisos from "./TipoCompromisos.js";

const PersonasCompromisos = db.define("rel_personas_compromisos",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    id_personal: {
      type: Sequelize.INTEGER,
    },
    id_compromiso: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
    tableName: "nub_usuarios_sedes",
  }
);

PersonasCompromisos.belongsTo(FichaPersonal, { foreignKey: 'id_personal'})
PersonasCompromisos.belongsTo(TipoCompromisos, { foreignKey: 'id_compromiso'}) 


export default PersonasCompromisos