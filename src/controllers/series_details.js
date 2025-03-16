import { request, response } from 'express'
import { fetchSeriesDetails } from '../service/series_details.js'

const getSeriesDetails = async (req = request, res = response) => {
  const { seriesId = '' } = req.params

  try {
    const data = await fetchSeriesDetails(seriesId)
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
  getSeriesDetails
}
