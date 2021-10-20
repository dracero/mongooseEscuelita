const express = require('express')
var cors = require('cors')

const app = express()

require('./database/connection')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//Rutas 
app.use('/productos',require('./routes/productos'))

// Middleware para manejar errores
app.use((error, req, res, next) => {
  res.status(error.code || 500).json({ error : error.message })
})



const server = app.listen(process.env.PORT || 8080) 

server.on('error', error => {
  console.log('error en el servidor:', error)
})
