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
    return this.hasMany("Case");
  }

  defendant() {
    return this.belongsTo("Person", "defendant_id", "id");
  }

  cosigner() {
    return this.belongsTo("Person", "cosigner_id", "id");
  }
}

module.exports = bookshelf.model("Bail", Bail);
