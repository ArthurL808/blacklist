const bookshelf = require("../bookshelf");

class User extends bookshelf.Model {
  get tableName() {
    return "users";
  }
  get hasTimestamps() {
    return true;
  }

  hunts(){
    return this.hasMany('Hunt')
  }
  marks(){
    return this.hasMany('DeragatoryMark')
  }

}

module.exports = bookshelf.model("User", User);
