const bookshelf = require("../bookshelf");

class DeragatoryMark extends bookshelf.Model {
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

  onPerson() {
    return this.belongsTo("Person", "on_person", "id");
  }
}

module.exports = bookshelf.model("DeragatoryMark", DeragatoryMark);
