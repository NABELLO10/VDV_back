import { Sequelize } from "sequelize";
import db from "../config/db.js";

const Log = db.define('logs', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey:true, 
        autoIncrement:true
    },
    des_log:{
        type: Sequelize.STRING(10000)
    },
    id_cliente:{
        type: Sequelize.INTEGER
    },
},
{
  timestamps: true,
  tableName: "logs",
})


export default Log