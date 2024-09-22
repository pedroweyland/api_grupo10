const axios = require('axios')
const { request, response } = require('express')

const getPersonasDetalles = (req = request, res = response) => {
  const { idPerson = '' } = req.params

  axios.get(`${process.env.URL}person/${idPerson}`, {
    params: {
      api_key: process.env.API_KEY
    }
  })

    .then((response) => {
      const { data } = response

      res.status(200).json({
        status: 200,
        data
      })
    })

    .catch((error) => {
      if (error.response.status === 404) {
        res.status(404).json({
          status: 404,
          message: 'Error: Not Found'
        })
      } else {
        res.status(400).json({
          status: 400,
          message: 'Error: Bad Request'
        })
      }
    })
}

const getPersonasPopulares = (req = request, res = response) => {
  const { page = '', language = '' } = req.query

  const querysParams = []

  if (page) {
    querysParams.push(`page=${page}`)
  }
  if (language) {
    querysParams.push(`language=${language}`)
  }

  const filter = querysParams.length > 0 ? `?${querysParams.join('&')}` : ''

  axios.get(`${process.env.URL}person/popular${filter}`, {
    params: {
      api_key: process.env.API_KEY
    }
  })

    .then((response) => {
      const { data } = response

      res.status(200).json({
        status: 200,
        data
      })
    })
    .catch((error) => {
      if (error.response && error.response.status === 404) {
        res.status(404).json({
          status: 404,
          message: 'Error: Page Not Found'
        })
      } else {
        res.status(400).json({
          status: 400,
          message: 'Error: Bad Request'
        })
      }
    })
}

module.exports = {
  getPersonasDetalles,
  getPersonasPopulares
}
