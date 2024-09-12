const axios = require('axios');
const {request, response} = require('express');

const getPersonasDetalles = (req = request, res=response) => {

    axios.get('https://api.themoviedb.org/3/person/{person_id}')
    .then((response) => {
        const {data} = response;
        console.log(response); 

        res.status(200).json({
            msg: 'OK',
            data
        })
    })
    
    .catch((error)=>{
        console.log(error);
        res.status(400).json({
            msg: 'Error',
            error
        })
    })    
}



module.exports = {
    getPersonasDetalles
}