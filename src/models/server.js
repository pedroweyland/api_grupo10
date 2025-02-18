import User from '../database/users.js'
import express from 'express'
import seriesRoutes from '../routes/series.js'
import peopleRoutes from '../routes/people.js'
import movieRoutes from '../routes/movie.js'
import authRoutes from '../routes/auth.js'

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
    this.app.use('/api/v1/series', seriesRoutes)

    // Gabriel Ponce
    this.app.use('/api/v1/people', peopleRoutes)

    // Galo Santopietro y Pedro Weyland
    this.app.use('/api/v1/movie', movieRoutes)

    // Auth
    this.app.use('/api/v1/auth', authRoutes)
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
      console.log(`La API esta escuchando en el puerto ${this.port}`)
    })
  }
}

export default Server
