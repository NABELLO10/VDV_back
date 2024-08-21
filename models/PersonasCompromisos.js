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
    fecha_inicio: {
      type: Sequelize.STRING(20),
    },
    fecha_termino: {
      type: Sequelize.STRING(20),
    },
    obs: {
      type: Sequelize.TEXT,
    },
    est_activo: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
    tableName: "rel_personas_compromisos",
  }
);

PersonasCompromisos.belongsTo(FichaPersonal, { foreignKey: 'id_personal'})
PersonasCompromisos.belongsTo(TipoCompromisos, { foreignKey: 'id_compromiso'}) 


export default PersonasCompromisos