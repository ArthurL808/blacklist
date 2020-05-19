const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.Person.fetchAll({
    withRelated: [
      "gender",
      "defendantOn",
      "cosignerOn",
      "marks",
      "blacklistedBy",
      "cases",
      "reasons",
    ],
  })
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/search/:searchTerm", (req, res) => {
  return req.db.Person.where("first_name", "LIKE", `${req.params.searchTerm}%`)
    .fetchAll({
      withRelated: [
        "gender",
        "defendantOn",
        "cosignerOn",
        "marks",
        "blacklistedBy",
        "cases",
        "reasons",
      ],
    })
    .then((persons) => {
      let results = persons.toJSON()
      if(results.length <= 0){
        return res.status(400).send('NO RESULTS')
      }
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500)
      res.send("Server error")
    });
});

router.get("/:id", (req, res) => {
  return req.db.Person.where({ id: req.params.id })
    .fetch({
      withRelated: [
        "gender",
        "defendantOn",
        "cosignerOn",
        "marks",
        "blacklistedBy",
        "cases",
        "reasons",
      ],
    })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
