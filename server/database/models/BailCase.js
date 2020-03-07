const bookshelf = require("../bookshelf");

class BailCase extends bookshelf.Model {
  get tableName() {
    return "bails_cases";
  }

  get hasTimestamps() {
    return true;
  }

  bail_id() {
    return this.hasOne("Bail", "id", "bail_id");
  }

  case_id() {
    return this.hasOne("Case", "id", "case_id");
  }
}

module.exports = bookshelf.model("BailCase", BailCase);
