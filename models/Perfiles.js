import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Clientes from "./Clientes.js"


const Perfiles = db.define('mae_perfiles', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey:true, 
        autoIncrement:true
    },
    nom_perfil:{
        type: Sequelize.STRING
    },
    est_activo:{
        type: Sequelize.INTEGER
    },
    id_cliente:{
        type: Sequelize.INTEGER
    }
},
{
  timestamps: true,
  tableName: "mae_perfiles",
})

Perfiles.belongsTo(Clientes, { foreignKey: 'id_cliente'}) 

export default Perfiles