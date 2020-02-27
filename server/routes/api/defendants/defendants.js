const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.Defendant.fetchAll()
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  return req.db.Defendant.where({ id: req.params.id })
    .fetch()
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
