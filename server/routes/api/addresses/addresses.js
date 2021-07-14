const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  return req.db.Address.forge({
    street_number: req.body.street_number,
    street_name: req.body.route,
    zipcode: req.body.postal_code,
    apt_number: req.body.apt_number,
    city: req.body.locality,
    state: req.body.administrative_area_level_1,
    country: req.body.country,
    person_id: req.body.on_person,
  })
    .save()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
