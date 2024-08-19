import { Sequelize } from "sequelize";
import db from "../config/db.js";

const Ventanas = db.define("mae_ventanas",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_ventana: {
      type: Sequelize.STRING,
    }   
  },
  {
    timestamps: true,
    tableName: "mae_ventanas",
  }
);


export default Ventanas