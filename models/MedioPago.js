import { Sequelize } from "sequelize";
import db from "../config/db.js";


const MedioPago = db.define('mae_medio_pago', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey:true, 
        autoIncrement:true
    },
    nombre:{
        type: Sequelize.STRING(300)
    }  
},
{
  timestamps: true,
  tableName: "mae_medio_pago",
})


export default MedioPago