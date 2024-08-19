import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Ventanas from "./Ventanas.js";
import Perfiles from "./Perfiles.js";


const VentanasPerfiles = db.define("rel_ventanas_perfiles",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_ventana: {
      type: Sequelize.INTEGER,
    },   
    id_perfil: {
      type: Sequelize.INTEGER,
    }   
  },
  {
    timestamps: true,
    tableName: "rel_ventanas_perfiles",
  }
);

VentanasPerfiles.belongsTo(Ventanas, {foreignKey : "id_ventana"})
VentanasPerfiles.belongsTo(Perfiles, {foreignKey : "id_perfil"})


export default VentanasPerfiles