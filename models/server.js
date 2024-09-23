const express = require('express')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.routes()
  }

  middleware () {
    this.app.use(express.static('public'))
  }

  routes () {
    //this.app.use('/api/v1/peliculas', require('../routes/peliculas')) // Integrante 1
    
    // Daniel D'Onofrio
    this.app.use('/api/v1/series', require('../routes/series'))

    // Gabriel Ponce
    this.app.use('/api/v1/personas', require('../routes/personas'))

    // Galo Santopietro y Pedro Weyland
    this.app.use('/api/v1/movie', require('../routes/movie'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando en el this.PORT ${this.port}`)
    })
  }
}
module.exports = Server
