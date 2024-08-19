import { Sequelize } from "sequelize";
import db from "../config/db.js";

import Usuarios from "./Usuarios.js";
import Sedes from "./Sedes.js";

const UsuariosSedes = db.define("rel_usuarios_sedes",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }, 
    id_usuario: {
      type: Sequelize.INTEGER,
    },
    id_sede: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: true,
    tableName: "rel_usuarios_sedes",
  }
);

UsuariosSedes.belongsTo(Usuarios, { foreignKey: 'id_usuario'})
UsuariosSedes.belongsTo(Sedes, { foreignKey: 'id_sede'}) 


export default UsuariosSedes