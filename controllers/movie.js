const axios = require('axios')
const { request, response } = require('express')

const url = 'https://api.themoviedb.org/3/movie/'
const getPopularMoviesList=(req=request, res=response) => {
  axios.get(url + 'popular', {
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

const getMovieDetails=(req=request, res=response) => {
  const { idMovie = '' } = req.params

  axios.get(url + idMovie, {
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
    .catch((error) => {
      res.status(404).json({
        msg: '404K',
        error
      })
    })
}

module.exports = {
    getPopularMoviesList,
    getMovieDetails
  }