import {Sequelize } from "sequelize";
import db from "../config/db.js";

import Ciudades from "./Ciudades.js";
import EstadoCivil from "./EstadoCivil.js";
import Cargos from "./Cargos.js";
import Clientes from "./Clientes.js";
import Nacionalidades from "./Nacionalidades.js";

const FichaPersonal = db.define('mae_ficha_personal',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    rut:{
        type: Sequelize.STRING(20)
    },
    nom_personal:{
        type: Sequelize.STRING(100)
    },
    ape_paterno:{
        type: Sequelize.STRING(100)
    },  
    ape_materno:{
        type: Sequelize.STRING(100)
    },
    fec_nacimiento:{
        type: Sequelize.STRING(20)
    },  
    email:{
        type: Sequelize.STRING(300)
    },
    id_ciudad:{        
        type: Sequelize.INTEGER
    },
    direccion:{
        type: Sequelize.STRING(500)
    },
    id_estado_civil:{        
        type: Sequelize.INTEGER
    },
    id_nacionalidad:{
        type: Sequelize.INTEGER
    },  
    fono1:{
        type: Sequelize.STRING(20)
    },
    fono2:{
        type: Sequelize.STRING(20)
    },       
    id_cargo:{
        type: Sequelize.INTEGER
    },  
    nom_profesion:{
        type: Sequelize.STRING(500)
    },      
    fec_primera_vez:{
        type: Sequelize.STRING(100)
    },      
    fec_incorporacion:{
        type: Sequelize.STRING(100)
    },
    est_miembro:{
        type: Sequelize.INTEGER
    },
    est_activo:{
        type: Sequelize.INTEGER
    },   
    id_cliente:{
        type: Sequelize.INTEGER
    },    
    user_add:{
        type: Sequelize.STRING(200)
    },       
    user_edit:{
        type: Sequelize.STRING(200)
    }
},
{
  timestamps: true,
  tableName: "mae_ficha_personal",
})

FichaPersonal.belongsTo(Ciudades,{foreignKey: 'id_ciudad'})
FichaPersonal.belongsTo(EstadoCivil,{foreignKey: 'id_estado_civil'})
FichaPersonal.belongsTo(Cargos,{foreignKey: 'id_cargo'})
FichaPersonal.belongsTo(Clientes,{foreignKey: 'id_cliente'})
FichaPersonal.belongsTo(Nacionalidades,{foreignKey: 'id_nacionalidad'})


export default FichaPersonal
