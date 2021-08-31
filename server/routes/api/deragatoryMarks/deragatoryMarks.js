const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.DeragatoryMark.fetchAll({
    withRelated: ["createdBy", "onPerson"],
  })
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/:id", (req, res) => {
  return req.db.DeragatoryMark.where({ id: req.params.id })
    .fetch({withRelated:['onPerson','createdBy']})
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get("/onPerson/:id", (req, res) => {
  return req.db.DeragatoryMark.where({ on_person: req.params.id })
    .fetchAll({ withRelated: ["createdBy"] })
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.post("/onPerson/:id", (req, res) => {
  return req.db.DeragatoryMark.forge({
    user_id: req.user,
    on_person: req.params.id,
    non_payment: req.body.non_payment,
    fraud: req.body.fraud,
    skipped_bail: req.body.skipped_bail,
    aggressive: req.body.aggressive,
    hiding_fugitive: req.body.hiding_fugitive,
    non_compliance_with_terms: req.body.non_compliance_with_terms,
    no_communication: req.body.no_communication,
    other: req.body.other,
  })
    .save()
    .then((results) => {
      console.log(results);
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  return req.db.DeragatoryMark.forge({
    user_id: req.user,
    on_person: req.body.on_person,
    non_payment: req.body.non_payment,
    fraud: req.body.fraud,
    skipped_bail: req.body.skipped_bail,
    aggressive: req.body.aggressive,
    hiding_fugitive: req.body.hiding_fugitive,
    non_compliance_with_terms: req.body.non_compliance_with_terms,
    no_communication: req.body.no_communication,
    other: req.body.other,
  })
    .save()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Something went wrong while adding a new mark.",
        error: err,
      });
    });
});

router.put("/:id", (req, res) => {
  return req.db.DeragatoryMark.forge({ id: req.params.id })
    .save({ reason_id: req.body.reason_id, person_role: req.body.person_role })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Something went wrong when trying to edit a mark",
        error: err,
      });
    });
});

router.delete("/:id", (req, res) => {
  return req.db.DeragatoryMark.where({ id: req.params.id })
    .destroy()
    .then(() => {
      res.status(200).send("The Deragatory mark has been deleted");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Something went wrong trying to delete a mark.",
        error: err,
      });
    });
});

module.exports = router;
