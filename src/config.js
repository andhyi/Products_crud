//! const dotenv = require('dotenv')
//! dotenv.config()

//? Habilita acceder a las variables del entorno de mi .env
require('dotenv').config()

const config = {
    port: process.env.PORT || 10000,
    nodeEnv: process.env.NODE_ENV || 'development',
    db:{
        port:       process.env.DB_PORT || 5432,
        username:   process.env.DB_USER || 'postgres',
        password:   process.env.DB_PASS || 'root',
        host:       process.env.DB_HOST || 'localhost',
        name:       process.env.DB_NAME || 'products_crud'
    }
}
module.exports =  config;