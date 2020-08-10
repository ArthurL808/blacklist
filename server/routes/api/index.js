const userRoutes = require("./users/users");
const personsRoutes = require("./persons/persons");

const deragatoryMarksRoutes = require("./deragatoryMarks/deragatoryMarks");
const gendersRoutes = require("./genders/genders");
const huntsRoutes = require('./hunts/hunts')

module.exports = {
  users: userRoutes,
  persons: personsRoutes,
  genders: gendersRoutes,
  deragatoryMarks: deragatoryMarksRoutes,
  hunts: huntsRoutes
};
