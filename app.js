require('dotenv').config()
const Server = require('./src/models/server')

const servidor = new Server()

servidor.listen()
