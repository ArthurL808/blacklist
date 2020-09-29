const User = require("./models/User");
const Person = require("./models/Person");
const Reason = require("./models/Reason");
const Gender = require("./models/Gender");
const DeragatoryMark = require("./models/DeragatoryMark");
const Hunt = require("./models/Hunt");
const Associate = require("./models/Associate");
const Address = require('./models/Address')

module.exports = function (req, res, next) {
  req.db = {
    User,
    Person,
    Reason,
    Gender,
    DeragatoryMark,
    Hunt,
    Associate,
    Address
  };
  next();
};
