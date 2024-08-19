import { Sequelize } from "sequelize";
import db from "../config/db.js";

const Nacionalidades = db.define("mae_nacionalidades",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom_nacionalidad: {
      type: Sequelize.STRING,
    }
  },
  {
    timestamps: true,
    tableName: "mae_nacionalidades",
  }
);

export default Nacionalidades