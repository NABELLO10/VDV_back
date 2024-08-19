import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Clientes from "./Clientes.js";

const TipoCompromisos = db.define('mae_tipo_compromisos', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey:true, 
        autoIncrement:true
    },
    nom_tipo:{
        type: Sequelize.STRING(300)
    },
    id_cliente:{
        type: Sequelize.INTEGER
    },
},
{
  timestamps: true,
  tableName: "mae_tipo_compromisos",
})

TipoCompromisos.belongsTo(Clientes, {foreignKey : "id_cliente"})

export default TipoCompromisos