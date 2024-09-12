const {Router} = require ('espress');
const { getPersonasDetalles } = require('../Controllers/personas_detalles');

const rutas = Router();

rutas.get('/', getPersonasDetalles)

module.exports = rutas;