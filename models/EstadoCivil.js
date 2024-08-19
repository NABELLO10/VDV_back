import { Sequelize } from "sequelize";
import db from "../config/db.js";

const EstadoCivil = db.define('mae_estado_civil', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey:true, 
        autoIncrement:true
    },
    nom_estado_civil:{
        type: Sequelize.STRING(10000)
    }    
})


export default EstadoCivil