const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb+srv://admin:cinemapp@cluster0-gnpmg.mongodb.net/cinema?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log('conectado'))

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333)
