const userRoutes = require("./users/users");
const defendantRoutes = require("./defendants/defendants");
const casesRoutes = require("./cases/cases");
const bailsRoutes = require("./bails/bails");
const cosignersRoutes = require("./cosigners/cosigners");
const bailsReasonsRoutes = require("./bailsReasons/bailsReasons");
const reasonsRoutes = require("./reasons/reasons");
const gendersRoutes = require("./genders/genders");

module.exports = {
  users: userRoutes,
  defendants: defendantRoutes,
  cases: casesRoutes,
  bails: bailsRoutes,
  genders: gendersRoutes,
  cosigners: cosignersRoutes,
  bailsReasons: bailsReasonsRoutes,
  reasons: reasonsRoutes
};
