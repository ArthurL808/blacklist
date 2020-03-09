const userRoutes = require("./users/users");
const defendantRoutes = require("./defendants/defendants");
const casesRoutes = require("./cases/cases");
const bailsRoutes = require("./bails/bails");
module.exports = {
  users: userRoutes,
  defendants: defendantRoutes,
  cases: casesRoutes,
  bails: bailsRoutes
};
