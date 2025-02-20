import { request, response } from 'express'
import {fetchPopularMovies } from '../service/popular_movies.js'

// Integrante Galo Santopietro
const getPopularMovies = async (req = request, res = response) => {
  const { page = '', language = '' } = req.query
  const queryParams = []

  if (page) {
    queryParams.push(`page=${page}`)
  }
  if (language) {
    queryParams.push(`language=${language}`)
  }

  try {
    const data = await fetchPopularMovies(queryParams)
    res.status(200).json({
      status: 200,
      data: data
    })
  } catch (error) {
    res.status(500).json({
      status: error.status,
      message: error.message
    })
  }
}

export {
  getPopularMovies
}
