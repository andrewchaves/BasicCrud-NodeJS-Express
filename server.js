const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

//Iniciando o app
const app = express()
app.use(express.json())
app.use(cors())

//Iniciando o DB
mongoose.connect(
    'mongodb://localhost:27017/rocket-api', 
    {useNewUrlParser: true, useUnifiedTopology: true}
    )

//Declarando os models
requireDir('./src/model')

//Declarando as rotas
app.use('/api', require('./src/routes'))


// Definindo a porta da api
app.listen(3001)