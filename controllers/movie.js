const axios = require('axios')
const { request, response } = require('express')
// Integrante Galo Santopietro
const getPopularMoviesList = (req = request, res = response) => {
  const { page = '', language = '' } = req.query

  const querysParams = []

  if (page) {
    querysParams.push(`page=${page}`)
  }
  if (language) {
    querysParams.push(`language=${language}`)
  }

  const filter = querysParams.length > 0 ? `?${querysParams.join('&')}` : ''

  axios.get(process.env.URL + 'movie/popular' + filter, {
    params: {
      api_key: process.env.API_KEY
    }
  })
    .then((response) => {
      const { data } = response

      res.status(200).json({
        statusCode: '200K',
        data
      })
    })
    .catch((error) => {
      res.status(400).json({
        statusCode: '400K',
        error
      })
    })
}

const getMovieDetails = (req = request, res = response) => {
  const { idMovie = '' } = req.params

  axios.get(process.env.URL + 'movie/' + idMovie, {
    params: {
      api_key: process.env.API_KEY
    }
  })
    .then((response) => {
      const { data } = response
      res.status(200).json({
        statusCode: '200K',
        data
      })
    })
    .catch((error) => {
      if ((error.response.status === 404)) {
        res.status(404).json({
          statusCode: 404,
          messege: 'NOT FOUND'
        })
      } else {
        res.status(400).json({
          statusCode: 400,
          messege: 'BAD REQUEST'
        })
      }
    })
}

module.exports = {
  getPopularMoviesList,
  getMovieDetails
}
