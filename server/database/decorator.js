const User = require("./models/User");
const Defendant = require("./models/Defendant");
const Reason = require("./models/Reason")

module.exports = function(req, res, next) {
  req.db = {
    User,
    Defendant,
    Reason
  };
  next();
};
