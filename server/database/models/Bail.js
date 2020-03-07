const bookshelf = require("../bookshelf");

class Bail extends bookshelf.Model {
  get tableName() {
    return "bails";
  }

  get hasTimestamps() {
    return true;
  }

  user() {
    return this.belongsTo("User");
  }

  cases() {
    return this.hasMany("BailCase");
  }

  cosigners() {
    return this.hasMany("BailCosigner");
  }

  reasons() {
    return this.hasMany("BailReason");
  }
}

module.exports = bookshelf.model("Bail", Bail);
