import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const db = new Sequelize(process.env.BDNAME, process.env.BDUSER, process.env.BDPASS,{
    host: process.env.BDHOST,
    dialect: process.env.BDDIALECT,
    timezone: process.env.TIMEZONE,
    port: process.env.PORT_DB,
    logging: false,
    define: {
        timestamps: false,
        freezeTableName: true
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})


export default db