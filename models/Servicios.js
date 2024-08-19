import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Clientes from "./Clientes.js";

const Servicios = db.define("mov_servicios",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_servicio: {
      type: Sequelize.STRING,
    },
    fecha_servicio: {
      type: Sequelize.STRING,
    },
    id_cliente: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
    tableName: "mov_servicios",
  }
);

Servicios.belongsTo(Clientes, {foreignKey : "id_cliente"})

export default Servicios