import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Eventos from "./Eventos.js";

const Inscripciones = db.define('mov_inscripciones', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey:true, 
        autoIncrement:true
    },
    id_evento:{
        type: Sequelize.INTEGER
    },    
    rut:{
        type: Sequelize.STRING
    },
    nombres:{
        type: Sequelize.STRING
    },
    ape_paterno:{
        type: Sequelize.STRING
    },
    ape_materno:{
        type: Sequelize.STRING
    },
    est_presente:{
        type: Sequelize.INTEGER
    },  
    obs:{
        type: Sequelize.STRING(400)
    },  
},
{
  timestamps: true,
  tableName: "mov_inscripciones",
})

Inscripciones.belongsTo(Eventos, {foreignKey : "id_evento"})

export default Inscripciones