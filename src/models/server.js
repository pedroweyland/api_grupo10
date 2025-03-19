import User from '../database/users.js'
import Lists from '../database/lists.js'
import Media from '../database/media.js'
import express from 'express'
import cors from 'cors'
import seriesRoutes from '../routes/series.js'
import peopleRoutes from '../routes/people.js'
import movieRoutes from '../routes/movies.js'

class Server {
  constructor () {
    this.app = express()
    this.port = process.env.PORT || 3000
    this.middleware()
    this.routes()
  }

  middleware () {
    // Configura CORS
    this.app.use(cors())
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
      await Lists.sync()
      await Media.sync()
      console.log('Base de datos sincronizada correctamente.')
    } catch (error) {
      console.error('Error al sincronizar la base de datos:', error)
      process.exit(1)
    }
  }

  async listen () {
    this.app.listen(this.port, () => {
      console.log(`La API esta escuchando en el puerto ${this.port}`)
    })
  }
}

export default Server
