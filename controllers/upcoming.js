const axios = require('axios')
const { request, response } = require('express')
// Integrante Pedro Weyland

// Funcion para tener una lista de las peliculas que van a salir proximamente
const getUpcoming = (req = request, res = response) => {
  // Preparo mis posibles query params que puede ingresar mi usuario
  const { page = '', language = '' } = req.query

  // Creo un array para guardar todos las querys que mando el usuario
  const querysParams = []

  if (page) {
    querysParams.push(`page=${page}`)
  }
  if (language) {
    querysParams.push(`language=${language}`)
  }
  // 'filter' va ser una concatenacion de todos los querysParamas, si no hay querysParams queda vacio
  const filter = querysParams.length > 0 ? `?${querysParams.join('&')}` : ''

  axios.get(`${process.env.URL}movie/upcoming${filter}`, {
    params: {
      api_key: process.env.API_KEY

    }
  })
    .then((response) => {
      // Si sale todo bien le entrego al usuario la lista con un condigo 200K
      const { data } = response

      // Lanzo excepcion cuando no hay datos, ej: pone un pagina inexistente
      if (data.results.length === 0) {
        const error = new Error()
        error.status = 404
        throw error
      }

      res.status(200).json({
        status: 200,
        data: data.results
      })
    })
    .catch((error) => {
      if ((error.status === 404)) {
        res.status(404).json({
          status: 404,
          messege: 'NOT FOUND - Page not found'
        })
      } else {
        res.status(400).json({
          status: 400,
          messege: 'BAD REQUEST - Unexpected error'
        })
      }
    })
}

// Funcion para que devuelva los creditos que tiene un pelicula en especifico
const getMovieCredits = (req = request, res = response) => {
  const { idMovie = '' } = req.params

  axios.get(`${process.env.URL}movie/${idMovie}/credits`, {
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
      if ((error.status === 404)) {
        res.status(404).json({
          status: 404,
          messege: 'NOT FOUND - Movie not found'
        })
      } else {
        res.status(400).json({
          status: 400,
          messege: 'BAD REQUEST - Unexpected error'
        })
      }
    })
}
module.exports = {
  getUpcoming,
  getMovieCredits
}
