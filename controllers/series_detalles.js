const axios = require('axios');
const e = require('express');
const {request, response} = require('express');
const getSeries = (req = request, res = response) => {
    axios.get('https://api.themoviedb.org/3/tv/{series_id}')
    .then((response) => {
        console.log(response);
    })
        res.status(200).json({
            msg: 'OK',
            response
        })
    .catch((error) => {
        console.log(error);
        res.status(400).json({
            msg: 'Error',
            error
        })
    })
}

module.exports = {
    getSeries
}