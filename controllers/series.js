const axios = require('axios')
const e = require('express')
const { request, response } = require('express')
const getSeries = (req = request, res = response) => {
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
      console.log(error)
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
  getSeries
}
