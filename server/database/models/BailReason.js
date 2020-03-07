const bookshelf = require("../bookshelf");

class BailReason extends bookshelf.Model {
  get tableName() {
    return "bails_reasons";
  }

  get hasTimestamps() {
    return true;
  }

  bail_id() {
    return this.hasOne("Bail", "id", "bail_id");
  }

  reason_id() {
    return this.hasOne("Reason", "id", "reason_id");
  }
}

module.exports = bookshelf.model("BailReason", BailReason);
