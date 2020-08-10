const bookshelf = require("../bookshelf");

class Associate extends bookshelf.Model {
  get tableName() {
    return "associates";
  }

  get hasTimestamps() {
    return true;
  }

  person(){
      return this.belongsTo('Person')
  }
}

module.exports = bookshelf.model("Associate", Associate);
