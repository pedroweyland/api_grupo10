const express = require('express')
const cors = require('cors')
const { User } = require('../database/users')

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.routes()
  }

  middleware () {
    this.app.use(cors()) // Esto permite todas las solicitudes desde cualquier origen

    this.app.use(express.static('public'))
    this.app.use(express.json())
  }

  routes () {
    // Daniel D'Onofrio
    this.app.use('/api/v1/series', require('../routes/series'))

    // Gabriel Ponce
    this.app.use('/api/v1/people', require('../routes/people'))

    // Galo Santopietro y Pedro Weyland
    this.app.use('/api/v1/movie', require('../routes/movie'))

    // Auth
    this.app.use('/api/v1/auth', require('../routes/auth'))
  }

  async connectDB () {
    try {
      await User.sync()
      console.log('Base de datos sincronizada correctamente.')
    } catch (error) {
      console.error('Error al sincronizar la base de datos:', error)
      process.exit(1)
    }
  }

  async listen () {
    await this.connectDB()
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando en el this.PORT ${this.port}`)
    })
  }
}
module.exports = Server
