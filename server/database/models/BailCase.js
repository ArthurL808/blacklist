const bookshelf = require("../bookshelf");

class BailCase extends bookshelf.Model {
  get tableName() {
    return "bails_cases";
  }

  get hasTimestamps() {
    return true;
  }
}

module.exports = bookshelf.model('BailCase',BailCase)