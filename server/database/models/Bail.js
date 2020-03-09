const bookshelf = require("../bookshelf");

class Bail extends bookshelf.Model {
  get tableName() {
    return "bails";
  }

  get hasTimestamps() {
    return true;
  }

  user() {
    return this.belongsTo("User");
  }

  cases() {
    return this.hasMany("Case");
  }

  cosigners() {
    return this.hasMany("Cosigner");
  }

  reasons() {
    return this.belongsToMany("Reasons","bails_reasons");
  }

  defendant(){
    return this.belongsTo('Defendant')
  }
}

module.exports = bookshelf.model("Bail", Bail);
