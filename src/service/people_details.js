import axios from 'axios'

const fetchPeopleDetails = async (idPerson) => {
  try {
    const response = await axios.get(`${process.env.URL}person/${idPerson}`, {
      params: {
        api_key: process.env.API_KEY
      }
    })
    return response.data
  } catch (error) {
    error.status = error.status || 400

    if (error.status === 404) error.message = 'NOT FOUND - Person not found'
    throw error
  }
}

export {
  fetchPeopleDetails
}
