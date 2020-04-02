const userRoutes = require("./users/users");
const personsRoutes = require("./persons/persons");
const casesRoutes = require("./cases/cases");
const bailsRoutes = require("./bails/bails");
const deragatoryMarksRoutes = require("./deragatoryMarks/deragatoryMarks");
const reasonsRoutes = require("./reasons/reasons");
const gendersRoutes = require("./genders/genders");

module.exports = {
  users: userRoutes,
  persons: personsRoutes,
  cases: casesRoutes,
  bails: bailsRoutes,
  genders: gendersRoutes,
  deragatoryMarks: deragatoryMarksRoutes,
  reasons: reasonsRoutes
};
