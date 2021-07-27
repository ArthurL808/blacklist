const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.User.fetchAll()
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  return req.db.User.where({ id: req.params.id })
    .fetch({ withRelated: ["bails"] })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
