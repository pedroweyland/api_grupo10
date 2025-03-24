import { request, response } from 'express'
import {addToFavoriteList, getFavoriteList, removeFromFavoriteList} from '../database/favorite_list.js'

const postFavoriteList = async (request, response) => {
  try {
    const { userId, mediaId, mediaType } = request.body

    if (!userId) {
      throw new CustomError('Email is required', 400)
    }
    if (!mediaId) {
      throw new CustomError('Username is required', 400)
    }
    if (!mediaType) {
      throw new CustomError('Password is required', 400)
    }

    const favoriteItem = await addToFavoriteList({ userId, mediaId, mediaType })

    response.status(201).json({
      status: 201,
      message: favoriteItem
    })
  } catch (error) {
    response.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Internal server error'
    })
  }
}

const getFavoriteList = async (request, response) => {
  try {
    const { userId } = request.params
    const favoriteList = await getFavoriteList(userId)

    response.status(200).json({
      status: 200,
      favoriteList
    })
  } catch (error) {
    response.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Internal server error'
    })
  }
}

const deleteFavoriteList = async (request, response) => {
  try {
    const { userId, mediaId, mediaType } = request.body
    const result = await removeFromFavoriteList({ userId, mediaId, mediaType })

    response.status(200).json({
      status: 200,
      message: result.message
    })
  } catch (error) {
    response.status(error.status || 500).json({
      status: error.status || 500,
      message: error.message || 'Internal server error'
    })
  }
}

export {
  postFavoriteList,
  getFavoriteList,
  deleteFavoriteList
}