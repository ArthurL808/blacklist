const bookshelf = require("../bookshelf");

class DeragatoryMarks extends bookshelf.Model {
  get tableName() {
    return "deragatoryMarks";
  }

  get hasTimestamps() {
    return true;
  }

  reason() {
    return this.belongsTo("Reason");
  }
  createdBy() {
    return this.belongsTo("User");
  }

  bail() {
    return this.belongsTo("Bail");
  }

  onPerson() {
    return this.belongsTo("Person", "onPerson", "id");
  }
}

module.exports = bookshelf.model("DeragatoryMarks", DeragatoryMarks);
