import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Eventos from "./Eventos.js";
import MedioPago from "./MedioPago.js";

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
    email:{
        type: Sequelize.STRING
    },
    est_presente:{
        type: Sequelize.INTEGER
    },  
    obs:{
        type: Sequelize.STRING(400)
    },  
    est_pagado:{
        type: Sequelize.INTEGER
    }, 
    fecha_pago:{
        type: Sequelize.STRING
    }, 
    id_medio_pago:{
        type: Sequelize.INTEGER
    }, 
    img_comprobante:{
        type: Sequelize.TEXT
    },
    user_edit:{
        type: Sequelize.STRING
    }, 
},
{
  timestamps: true,
  tableName: "mov_inscripciones",
})

Inscripciones.belongsTo(Eventos, {foreignKey : "id_evento"})
Inscripciones.belongsTo(MedioPago, {foreignKey : "id_medio_pago"})

export default Inscripciones