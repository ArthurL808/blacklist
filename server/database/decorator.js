const User = require("./models/User");
const Defendant = require("./models/Defendant");
const Reason = require("./models/Reason");
const Gender = require("./models/Gender");
const Bail = require("./models/Bail");
const Case = require("./models/Case");
const Cosigner = require("./models/Cosigner");
const BailReason = require("./models/BailReason");


module.exports = function(req, res, next) {
  req.db = {
    User,
    Defendant,
    Reason,
    Gender,
    Bail,
    Case,
    Cosigner,
    BailReason,
  };
  next();
};
