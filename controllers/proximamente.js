const axios = require('axios')
const { request, response } = require('express')

// Funcion para tener una lista de las peliculas que van a salir proximamente
const getProximamente = (req = request, res = response) => {
  axios.get(process.env.url + 'movie/upcoming', {
    params: {
      api_key: process.env.API_KEY
    }
  })
    .then((response) => {
      // Si sale todo bien le entrego al usuario la lista con un condigo 200K
      const { data } = response

      res.status(200).json({
        status: 200,
        data: data.results
      })
    })
    .catch((error) => {
      // Si ocurre un Error lo atrapo y le mando al usuario el codigo de error y lo que sucedio
      if (error.response.status === 404) {
        res.status(400).json({
          status: 400,
          messege: 'Bad Request - Error inesperado'
        })
      }
    })
}

// Funcion para que devuelva los creditos que tiene un pelicula en especifico
const getCreditosDePelicula = (req = request, res = response) => {
  const { idPelicula = '' } = req.params

  axios.get(process.env.url + 'movie/' + idPelicula + '/credits', {
    params: {
      api_key: process.env.API_KEY
    }
  })
    .then((response) => {
      const { data } = response
      // Si sale todo bien le entrego al usuario los creditos y con un condigo 200K
      res.status(200).json({
        status: 200,
        data: data.cast
      })
    })
    .catch((error) => {
      // Si ocurre un Error lo atrapo y le mando al usuario el codigo de error y lo que sucedio
      if ((error.response.status === 404)) {
        res.status(404).json({
          status: 404,
          messege: 'NOT FOUND - Pelicula no encontrada'
        })
      } else {
        res.status(400).json({
          status: 400,
          messege: 'BAD REQUEST - Error inesperado'
        })
      }
    })
}
module.exports = {
  getProximamente,
  getCreditosDePelicula
}
