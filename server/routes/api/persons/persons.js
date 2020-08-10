const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.Person.fetchAll({
    withRelated: ["gender", "marks", "blacklistedBy", "reasons"],
  })
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/search/:searchTerm", (req, res) => {
  return req.db.Person.query(
    "where",
    "first_name",
    "ILIKE",
    `%${req.params.searchTerm}%`,
    "orWhere",
    "last_name",
    "ILIKE",
    `%${req.params.searchTerm}%`
  )
    .fetchAll({
      withRelated: ["gender", "marks", "blacklistedBy", "reasons"],
    })
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      res.status(500);
      res.send(err);
    });
});

router.get("/:id", (req, res) => {
  return req.db.Person.where({ id: req.params.id })
    .fetch({
      withRelated: ["gender", "associates","marks"],
    })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err)
    });
});

module.exports = router;
