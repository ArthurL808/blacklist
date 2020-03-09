const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.Case.fetchAll({
    withRelated: ["defendant"]
  })
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  return req.db.Case.where({ id: req.params.id })
    .fetch({ withRelated: ["defendant"] })
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
