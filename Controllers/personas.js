const axios = require('axios')
const { request, response } = require('express')
const { param } = require('../routes/personas')

const getPersonasDetalles = (req = request, res = response) => {
  const { person_id = '' } = req.params

  if (!person_id) {
    return res.status(400).json({
      msg: 'Falta el id de la persona'
    })
  }

   
  axios.get(`${process.env.URL}person/${person_id}`,{
    
    params: {
      api_key: process.env.API_KEY
     }
    }) 
    
  
      .then((response) => {
      const { data } = response
      console.log(response)

      res.status(200).json({
        status: 'OK',
        data
      })
    })

    .catch((error) => {
      console.log(error)
      if(error.response.status === 404){
        res.status(404).json({
          status: 'Error',
          error: 'No se encontro la persona'
        })
      }
      else{
        res.status(400).json({
          status: 'Error',
          error
        })
      }
     
    })
}

const getPersonasPopulares = (req = request, res = response) => {
  axios.get(`${process.env.URL}person/popular`,{

    params: {
      api_key: process.env.API_KEY
    }
  })
    
    
    .then((response) => {
      const { data } = response
      console.log(data)

      res.status(200).json({
        status: 'OK',
        data
      })
    })
    .catch((error) => {
      console.log(error)
      res.status(400).json({
        status: 'Error',
        error
      })
    })
}

// const getQueryParams = (req = request, res=response) => {
//     const {query} = req.query;
//     console.log(query)

//     const filtro =

//     console.log(query);
//     res.status(200).json({
//         msg: 'OK',
//         query
//     })

// }

module.exports = {
  getPersonasDetalles,
  getPersonasPopulares
}
