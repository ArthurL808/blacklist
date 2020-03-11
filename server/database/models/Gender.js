const bookshelf = require("../bookshelf");

class Gender extends bookshelf.Model {
  get tableName() {
    return "genders";
  }

  get hasTimestamps() {
    return true;
  }

  defendants() {
    return this.belongsTo("Defendant");
  }

  cosigners() {
    return this.belongsTo("Cosigner");
  }
}

module.exports = bookshelf.model("Gender", Gender);
