const express = require('express');
const db = require('./utils/database')
const initModels = require('./models/initModels');
const config = require('./config')
const ProductsRouter = require('./products/products.router')
const app = express()

db.authenticate()
//? Acciones Informativa de si las credenciales son correctas
    .then(() => console.log('DB authentication Succesfully'))
    .catch((err) => console.log(err))

db.sync()
//? sincroniza los modelos con la base de datos, creando sus tablas 
    .then(() => console.log('DB synced'))
    .catch((err) => console.log(err))

initModels()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'ok'})
})

// app.use('/movies', moviesRouter) //? aqui se usa un prefijo: "movies" para todas las rutas

// puerto max : 35535
app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})