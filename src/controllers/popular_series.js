import { request, response } from 'express'
import { fetchPopularSeries } from '../service/popular_series.js'

const getPopularSeries = async (req = request, res = response) => {
  const { page = '', language = '' } = req.query

  const querysParams = []

  if (page) {
    querysParams.push(`page=${page}`)
  }
  if (language) {
    querysParams.push(`language=${language}`)
  }

  try {
    const data = await fetchPopularSeries(querysParams)
    res.status(200).json({
      status: 200,
      data
    })
  } catch (error) {
    res.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message
    })
  }
}
export {
  getPopularSeries
}
