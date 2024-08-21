import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Sedes from "./Sedes.js";

const TipoMovFinanzas = db.define('mae_tipo_mov_finanzas', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey:true, 
        autoIncrement:true
    },
    nom_tipo:{
        type: Sequelize.STRING(300)
    },
    id_sede:{
        type: Sequelize.INTEGER
    },
},
{
  timestamps: true,
  tableName: "mae_tipo_mov_finanzas",
})

TipoMovFinanzas.belongsTo(Sedes, {foreignKey : "id_sede"})

export default TipoMovFinanzas