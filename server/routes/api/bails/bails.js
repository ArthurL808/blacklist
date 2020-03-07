const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.Bail.fetchAll({
    withRelated: ["cases", "cosigners", "user", "reasons"]
  })
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  return req.db.Bail.where({ id: req.params.id })
    .fetch({ withRelated: ["cases", "cosigners", "user", "reasons"] })
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
