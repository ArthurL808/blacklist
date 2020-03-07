const bookshelf = require("../bookshelf");

class BailCosigner extends bookshelf.Model {
  get tableName() {
    return "bails_cosigners";
  }

  get hasTimestamps() {
    return true;
  }

  bail_id() {
    return this.hasOne("Bail", "id", "bail_id");
  }

  cosigner_id() {
    return this.hasOne("Cosigner", "id", "cosigner_id");
  }
}

module.exports = bookshelf.model("BailCosigner", BailCosigner);
