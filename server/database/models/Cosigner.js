const bookshelf = require("../bookshelf");

class Cosigner extends bookshelf.Model {
  get tableName() {
    return "cosigners";
  }

  get hasTimestamps() {
    return true;
  }

  gender() {
    return this.hasOne("Gender", "id", "gender_id");
  }

  bails() {
    return this.belongsTo("Bail");
  }
}

module.exports = bookshelf.model("Cosigner", Cosigner);
