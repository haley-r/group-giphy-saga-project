const express = require("express");
const pool = require("../modules/pool");

const router = express.Router();

// return all favorite images
router.get("/", (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post("/", (req, res) => {
  const addGif = req.body;
  console.log('from favorite POST', req.body);
  
  const queryText = `INSERT INTO favorites ("url") VALUES ($1)`;
  pool
    .query(queryText, [addGif])
    .then(() => {
      res.sendStatus(200);
    })
    .catch(error => {
      console.log("error in POST", error);
      res.sendStatus(500);
    });
});

// update given favorite with a category id
router.put("/:favId", (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
