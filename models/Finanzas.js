import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Sedes from "./Sedes.js";
import TipoMovFinanzas from "./TipoMovFinanzas.js";

const Finanzas = db.define("mov_finanzas",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },  
    id_sede: {
      type: Sequelize.INTEGER,
    },
    detalle: {
        type: Sequelize.TEXT,
    },
    id_movimiento: {
      type: Sequelize.INTEGER,
    },    
    monto_total: {
      type: Sequelize.INTEGER,
    },    
    est_cancelado: {
      type: Sequelize.INTEGER,
    },    
    fecha_vencimiento: {
      type: Sequelize.STRING(30),
    },    
  },
  {
    timestamps: true,
    tableName: "mov_finanzas",
  }
);

Finanzas.belongsTo(Sedes, {foreignKey : "id_sede"})
Finanzas.belongsTo(TipoMovFinanzas, {foreignKey : "id_movimiento"})


export default Finanzas