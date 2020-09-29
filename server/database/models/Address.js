const bookshelf = require("../bookshelf");

class Address extends bookshelf.Model {
  get tableName() {
    return "addresses";
  }

  get hasTimestamps() {
    return true;
  }

  person() {
    return this.belongsTo("Person");
  }
}

module.exports = bookshelf.model("Address", Address);
