import { Sequelize } from "sequelize";
import db from "../config/db.js";

import PersonasCompromisos from "./PersonasCompromisos.js";

const DetPersonasCompromisos = db.define("det_personas_compromisos",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    id_persona_compromiso: {
      type: Sequelize.INTEGER,
    },
    detalle: {
      type: Sequelize.TEXT,
    },
  },
  {
    timestamps: true,
    tableName: "nub_usuarios_sedes",
  }
);

DetPersonasCompromisos.belongsTo(PersonasCompromisos, { foreignKey: 'id_persona_compromiso'})


export default DetPersonasCompromisos