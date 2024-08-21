import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Clientes from "./Clientes.js";

const ContactoClientes = db.define("rel_contacto_clientes",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_contacto: {
      type: Sequelize.STRING(200),
    },
    mail: {
      type: Sequelize.STRING,
    },
    fono: {
      type: Sequelize.STRING,
    },
    id_cliente: {
      type: Sequelize.INTEGER,
    } 
  },
  {
    timestamps: true,
    tableName: "rel_contacto_clientes",
  }
);

ContactoClientes.belongsTo(Clientes, {foreignKey : "id_cliente"})


export default ContactoClientes