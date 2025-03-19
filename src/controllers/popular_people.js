import { request, response } from 'express'
import { fetchPopularPeople } from '../service/popular_people.js'

const getPeoplePopular = async (req = request, res = response) => {
  const { page = '', language = '' } = req.query

  const querysParams = []

  if (page) {
    querysParams.push(`page=${page}`)
  }
  if (language) {
    querysParams.push(`language=${language}`)
  }

  try {
    const data = await fetchPopularPeople(querysParams)
    res.status(200).json({
      status: 200,
      data
    })
  } catch (error) {
    res.status(error.status || 500).json({ // buscamos el estado real de la respuesta
      status: error.status || 500,
      message: error.message
    })
  }
}
export {
  getPeoplePopular
}
