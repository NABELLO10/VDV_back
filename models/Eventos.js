import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Sedes from "./Sedes.js";

const Eventos = db.define('mae_eventos', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey:true, 
        autoIncrement:true
    },
    nom_evento:{
        type: Sequelize.STRING(300)
    },
    fecha:{
        type: Sequelize.STRING(300)
    },
    detalle:{
        type: Sequelize.TEXT
    },
    imagen:{
        type: Sequelize.TEXT
    },
    id_sede:{
        type: Sequelize.INTEGER
    },
    total_cupos:{
        type: Sequelize.INTEGER
    }   
},
{
  timestamps: true,
  tableName: "mae_eventos",
})

Eventos.belongsTo(Sedes, {foreignKey : "id_sede"})

export default Eventos