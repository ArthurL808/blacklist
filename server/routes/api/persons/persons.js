const express = require("express");
const router = express.Router();
const upload = require("../../../services/file-upload");
const singleUpload = upload.single("image");

router.get("/", (req, res) => {
  return req.db.Person.fetchAll({
    withRelated: ["gender", "marks", "blacklistedBy", "reasons", "addresses"],
  })
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/search/:searchTerm", (req, res) => {
  return req.db.Person.query(function (qb) {
    qb.where("first_name", "ILIKE", `%${req.params.searchTerm}%`).orWhere(
      "last_name",
      "ILIKE",
      `%${req.params.searchTerm}%`
    );
  })
    .fetchAll({
      withRelated: ["gender", "marks", "blacklistedBy", "addresses"],
    })
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.send(err);
    });
});

router.get("/:id", (req, res) => {
  return req.db.Person.where({ id: req.params.id })
    .fetch({
      withRelated: ["gender", "associates", "marks", "addresses"],
    })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      res.status(500).send(err);
      console.log(err);
    });
});

router.post("/", singleUpload, (req, res) => {
  let newPerson = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    dob: req.body.dob,
    height: req.body.height,
    weight: req.body.weight,
    gender_id: req.body.gender_id,
  };
  if (!req.file) {
    newPerson.image_url =
      "https://bailbonds-blacklist.s3-us-west-2.amazonaws.com/Portrait_Placeholder.png";
  } else {
    newPerson.image_url = req.file.location;
  }
  return req.db.Person.forge(newPerson)
    .save()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Something went wrong person not added.");
    });
});

router.put("/:id", singleUpload, (req, res) => {
  let newPerson = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address: req.body.address,
    dob: req.body.dob,
    height: req.body.height,
    weight: req.body.weight,
    gender_id: req.body.gender_id,
  };
  if (req.file) {
    newPerson.image_url = req.file.location;
  } else if (req.body.image_url && !req.file) {
    newPerson.image_url = req.body.image_url;
  } else {
    newPerson.image_url =
      "https://bailbonds-blacklist.s3-us-west-2.amazonaws.com/Portrait_Placeholder.png";
  }

  return req.db.Person.forge({ id: req.params.id })
    .save(newPerson)
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Something went wrong!");
    });
});

router.delete("/:id", (req, res) => {
  return req.db.Person.where({ id: req.params.id })
    .destroy()
    .then(() => {
      return res.send("Person has been deleted!");
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
