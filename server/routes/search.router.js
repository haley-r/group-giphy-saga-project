const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/:search", (req, res) => {
  console.log("this is req.params", req.params);

  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&limit=5&q=${req.params.search}`
    )
    .then(response => {
      console.log("this is the API response", response.data);
      res.send(response.data);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
