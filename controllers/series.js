const axios = require('axios')
const { request, response } = require('express')

const getPopularSeries = (req = request, res = response) => {
  
  const { page = '', language = '' } = req.query
  const querysParams = []

  if (page) {
    querysParams.push(`page=${page}`)
  }
  if (language) {
    querysParams.push(`language=${language}`)
  }

  const filter = querysParams.length > 0 ? `?${querysParams.join('&')}` : ''
  
  axios.get(`${process.env.URL}tv/popular${filter}`, {
    params: {
      api_key: process.env.API_KEY
    }
  })

    .then((response) => {
      const { data } = response

      if (data.results.length === 0) {
        const error = new Error()
        error.status = 404
        throw error
      }

      res.status(200).json({
        status: 'OK',
        data
      })
    })

    .catch((error) => {

      if (error.response.status === 404) {
        res.status(404).json({
          status: 'Error',
          messege: 'Not found'
        })
      } else {
        res.status(400).json({
          status: 'Error',
          messege: 'Bad request'
        })
      }
    })
  }

const getSeriesDetails = (req = request, res = response) => {
  const { series_id = '' } = req.params

  if (!series_id) {
    return res.status(400).json({
      msg: 'Falta id de la serie'
    })
  }

  axios.get(`${process.env.URL}tv/${series_id}`, {
    params: {
      api_key: process.env.API_KEY
    }
  })

    .then((response) => {
      const { data } = response
      res.status(200).json({
        status: 'OK',
        data
      })
    })

    .catch((error) => {

      if (error.response.status === 404) {
        res.status(404).json({
          status: 'Error',
          error: 'No se encontró la serie'
        })
      } else {
        res.status(400).json({
          status: 'Error',
          error
        })
      }
    })
}

module.exports = {
  getPopularSeries,
  getSeriesDetails
}
