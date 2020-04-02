const User = require("./models/User");
const Person = require("./models/Person");
const Reason = require("./models/Reason");
const Gender = require("./models/Gender");
const Bail = require("./models/Bail");
const Case = require("./models/Case");
const DeragatoryMarks = require("./models/DeragatoryMarks");


module.exports = function(req, res, next) {
  req.db = {
    User,
    Person,
    Reason,
    Gender,
    Bail,
    Case,
    DeragatoryMarks,
  };
  next();
};
