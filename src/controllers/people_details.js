import { request, response } from 'express'
import { fetchPeopleDetails } from '../service/people_details.js'

const getPeopleDetails = async (req = request, res = response) => {
  const { idPerson = '' } = req.params

  try {
    const data = await fetchPeopleDetails(idPerson)
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
  getPeopleDetails
}
