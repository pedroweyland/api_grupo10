import { request, response } from 'express'
import { addToWatchlist, getWatchlist, removeFromWatchlist } from '../service/watchlist.js'

export const postWatchlist = async (req = request, res = response) => {
  try {
    const { userId, mediaApiId, mediaType } = req.body

    const { item, mediaDetails } = await addToWatchlist({ userId, mediaApiId, mediaType })

    res.status(201).json({
      status: 201,
      message: 'Item added to watchlist',
      item,
      mediaDetails
    })
  } catch (error) {
    console.error('Error en POST /watchlist:', error)
    res.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Internal server error'
    })
  }
}

export const getUserWatchlist = async (req = request, res = response) => {
  try {
    const { userId } = req.params
    const items = await getWatchlist(userId)

    res.status(200).json({
      status: 200,
      watchlist: items
    })
  } catch (error) {
    res.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Internal server error'
    })
  }
}

export const deleteWatchlistItem = async (req = request, res = response) => {
  try {
    const { userId, mediaApiId, mediaType } = req.body
    const result = await removeFromWatchlist({ userId, mediaApiId, mediaType })

    res.status(200).json({
      status: 200,
      message: result.message
    })
  } catch (error) {
    res.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Internal server error'
    })
  }
}
