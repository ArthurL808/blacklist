const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.DeragatoryMark.fetchAll({
    withRelated: ["createdBy", "onPerson", "reason"]
  })
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/onPerson/:id", (req, res) => {
  return req.db.DeragatoryMark.where({ onPerson: req.params.id })
    .fetchAll({ withRelated: ["createdBy", "reason"] })
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
