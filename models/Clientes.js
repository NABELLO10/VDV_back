import { Sequelize } from "sequelize";
import db from "../config/db.js";


const Clientes = db.define("mae_clientes",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rut: {
      type: Sequelize.STRING(20),
    },
    nombre: {
      type: Sequelize.STRING,
    },
    est_activo: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
    tableName: "mae_clientes",
  }
);



export default Clientes