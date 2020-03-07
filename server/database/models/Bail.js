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
    return this.belongsToMany("Case", 'bails_cases');
  }

  cosigners() {
    return this.belongsToMany("Cosigner", "bails_cosigners");
  }

  reasons() {
    return this.belongsToMany("Reasons","bails_reasons");
  }
}

module.exports = bookshelf.model("Bail", Bail);
