const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.Defendant.fetchAll({
    withRelated: ["gender", "bails"]
  })
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  return req.db.Defendant.where({ id: req.params.id })
    .fetch({ withRelated: ["gender", "bails"] })
    .then(results => {
      res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
