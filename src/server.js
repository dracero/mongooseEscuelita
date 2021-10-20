const express = require('express')

const app = express()

require('./database/connection')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


//Rutas 
app.use('/productos',require('./routes/productos'))

// Middleware para manejar errores
app.use((error, req, res, next) => {
  res.status(error.code || 500).json({ error : error.message })
})

const PORT = process.env.port || 8080//cualquier port disponible en .env o el 8080

const server = app.listen(PORT, () => {
  console.log(`servidor escuchando en http://localhost:${PORT}`)
})

server.on('error', error => {
  console.log('error en el servidor:', error)
})
