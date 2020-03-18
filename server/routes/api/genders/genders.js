const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.Gender.fetchAll({ withRelated: ["defendants", "cosigners"] })
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  return req.db.Gender.where({ id: req.params.gender })
    .fetch({ withRelated: ["defendants", "cosigners"] })
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
