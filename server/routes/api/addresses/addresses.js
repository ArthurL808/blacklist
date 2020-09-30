const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  return req.db.Address.forge({
    street_address: req.body.address,
    zipcode: req.body.zipcode,
    apt_number: req.body.aptNumber,
    person_id: req.body.person_id,
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
