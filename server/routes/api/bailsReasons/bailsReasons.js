const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.BailReason.fetchAll({ withRelated: ["bail_id", "reason_id"] })
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  return req.db.BailReason.where({ id: req.params.id })
    .fetch({ withRelated: ["bail_id", "reason_id"] })
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
