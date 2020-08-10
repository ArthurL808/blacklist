const bookshelf = require("../bookshelf");

class Hunt extends bookshelf.Model {
  get tableName() {
    return "hunts";
  }

  get hasTimestamps() {
    return true;
  }

  person() {
    return this.belongsTo("Person");
  }

  gender() {
    return this.belongsTo("Gender").through("Person");
  }

  associates() {
    return this.hasMany("Associate", "person_id", "person_id");
  }

  user() {
    return this.belongsTo("User");
  }
}

module.exports = bookshelf.model("Hunt", Hunt);
