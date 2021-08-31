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

router.get("/myBlacklist", (req, res) => {
  return req.db.DeragatoryMark.where({ user_id: req.user.id })
    .fetchAll({ withRelated: ["onPerson"] })
    .then((results) => {
      res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
