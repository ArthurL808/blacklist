const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.DeragatoryMarks.fetchAll({
    withRelated: ["createdBy", "bail", "onPerson", "reason"]
  })
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  return req.db.DeragatoryMarks.where({ id: req.params.id })
    .fetch({ withRelated: ["createdBy", "bail", "onPerson", "reason"] })
    .then(results => {
      return res.json(results);
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;
