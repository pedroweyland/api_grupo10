const express = require('express')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.rutas()
  }

  middleware () {
    this.app.use(express.static('public'))
  }

  rutas () {
    // this.app.use('/api/v1/peliculas', require('../routes/peliculas')) // Integrante 1
    // Daniel D'Onofrio

    // Gabriel Ponce
    this.app.use('/api/v1/personas', require('../routes/personas'))

    // Galo Santopietro

    // Pedro Weyland
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando en el this.PORT ${this.port}`)
    })
  }
}

module.exports = Server
