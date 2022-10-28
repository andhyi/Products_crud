
const {Sequelize} = require('sequelize')
const config = require('../config')

const db = new Sequelize({
    dialect:    'postgres',
    host:   config.db.host, //? variable del entorno del host
    username:   config.db.username,  //? variable del entorno del usuario
    password:   config.db.password,  //? variable del entorno de la contraseña
    database:   config.db.name  //? variable del entorno de la base de datos
})

module.exports = db