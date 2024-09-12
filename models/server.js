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
      //this.app.use('/api/v1/peliculas', require('../routes/peliculas')) // Integrante 1
      
      // Daniel D'Onofrio

      // Gabriel Ponce

      // Pedro Weyland - Galo Santopietro
      this.app.use('/api/v1/movie', require('../routes/movie'))
    }
  
    listen () {
      this.app.listen(this.port, () => {
        console.log(`La API esta escuchando en el this.PORT ${this.port}`)
      })
    }
}
  
module.exports = Server