const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?api_key=lg2wsq5v2LXIFTTJpN7U7eMEOMV99Ra0&limit=5&q=cats`)
        .then((response) => {
            console.log('this is the API response', response.data);
            res.send(response.data);
        }).catch((error) => {
            console.log(error);
        })
})

module.exports = router;
