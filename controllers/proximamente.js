const axios = require('axios')
const { request, response } = require('express')

const url = 'https://api.themoviedb.org/3/movie/'
const getProximamente = (req = request, res = response) => {
  axios.get(url + 'upcoming', {
    params: {
      api_key: process.env.API_KEY
    }
  })
    .then((response) => {
      const { data } = response

      res.status(200).json({
        msg: '200K',
        data
      })
    })
    .catch((error) => {
      res.status(400).json({
        msg: '400K',
        error
      })
    })
}

const getCreditosDePelicula = (req = request, res = response) => {
  const { idPelicula = '' } = req.params

  axios.get(url + idPelicula + '/credits', {
    params: {
      api_key: process.env.API_KEY
    }
  })
    .then((response) => {
      const { data } = response

      res.status(200).json({
        msg: '200K',
        data
      })
    })
    .catch((error) => {
      if ((error.response.status === 404)) {
        res.status(404).json({
          msg: '404K - Pelicula no encontrada',
          error
        })
      } else {
        res.status(400).json({
          msg: '400K',
          error
        })
      }
    })
}
module.exports = {
  getProximamente,
  getCreditosDePelicula
}
