const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  return req.db.DeragatoryMark.fetchAll({
    withRelated: ["createdBy", "onPerson", "reason"],
  })
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/onPerson/:id", (req, res) => {
  return req.db.DeragatoryMark.where({ onPerson: req.params.id })
    .fetchAll({ withRelated: ["createdBy", "reason"] })
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res) => {
  return req.db.DeragatoryMark.forge({
    user_id: req.body.user_id,
    reason_id: req.body.reason_id,
    onPerson: req.body.person_id,
    personRole: req.body.personRole,
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
    .save({ reason_id: req.body.reason_id, personRole: req.body.personRole })
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
      res
        .status(500)
        .json({
          message: "Something went wrong trying to delete a mark.",
          error: err,
        });
    });
});

module.exports = router;
