const userRoutes = require("./users/users");
const personsRoutes = require("./persons/persons");

const deragatoryMarksRoutes = require("./deragatoryMarks/deragatoryMarks");
const gendersRoutes = require("./genders/genders");
const huntsRoutes = require("./hunts/hunts");
const addressesRoutes = require("./addresses/addresses");
const authRoutes = require("./auth/auth");

module.exports = {
  users: userRoutes,
  persons: personsRoutes,
  genders: gendersRoutes,
  deragatoryMarks: deragatoryMarksRoutes,
  hunts: huntsRoutes,
  addresses: addressesRoutes,
  auth: authRoutes,
};
