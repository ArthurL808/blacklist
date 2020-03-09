const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.Gender.fetchAll()
    .then(response => {
      return res.json(response);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
