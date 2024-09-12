const { Router } = require('express');
const { getSeries } = require('../controllers/series_detalles');

const rutas = Router();
rutas.get('/', getSeries);

module.exports = rutas;