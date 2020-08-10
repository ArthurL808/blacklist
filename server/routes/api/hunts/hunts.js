const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.Hunt.fetchAll({
    withRelated: ["person", "user"],
  })
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/active", (req, res) => {
  return req.db.Hunt.where({ active: true })
    .fetchAll({
      withRelated: ["person", "user", "associates",'gender'],
    })
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
