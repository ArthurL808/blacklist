const User = require("./models/User");
const Defendant = require("./models/Defendant");

module.exports = function(req, res, next) {
  req.db = {
    User,
    Defendant
  };
  next();
};
