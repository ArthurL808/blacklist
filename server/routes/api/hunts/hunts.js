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

router.get("/myBlacklist", (req, res) => {
  return req.db.Hunt.where({ user_id: req.user.id })
    .fetchAll({
      withRelated: ["person", "associates", "gender"],
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
      withRelated: ["person", "user", "associates", "gender"],
    })
    .then((results) => {
      return res.json(results);
    })
    .catch((err) => {
      console.log(err);
    });
});

// router.post('/', (req,res)=>{
//   return req.db.Hunt.forge({})
// })

module.exports = router;
