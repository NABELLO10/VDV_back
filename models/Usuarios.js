import {Sequelize } from "sequelize";
import bcrypt from "bcrypt"
import generarID from '../helpers/generarID.js'
import db from "../config/db.js";

//para Foreign Keys
import Perfiles from "./Perfiles.js"
import Clientes from "./Clientes.js"

const Usuarios = db.define('mae_usuarios', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey:true, 
        autoIncrement:true
    },
    nom_usuario:{
        type: Sequelize.STRING,
        required: true
    },
    password:{
        type: Sequelize.STRING,
        required: true
    },
    email : {
        type: Sequelize.STRING, required: true
    }, 
    token:{
        type: Sequelize.STRING,
        defaultValue: generarID(),
    },
    confirmado:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    id_perfil:{
        type: Sequelize.INTEGER,
    },
    est_activo:{
        type: Sequelize.INTEGER,        
    },
    id_cliente:{
        type:Sequelize.INTEGER
    }
},
{
  timestamps: true,
  tableName: "mae_usuarios",
},{
    hooks:{
        async beforeCreate(user){          
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(user.password, salt)
            user.password = hash
        }       
    }    
})

//agregando foreign key
Usuarios.belongsTo(Perfiles, { foreignKey: 'id_perfil'})
Usuarios.belongsTo(Clientes, { foreignKey: 'id_cliente'}) 





export default Usuarios