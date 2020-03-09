const bookshelf = require("../bookshelf");

class Defendant extends bookshelf.Model {
  get tableName() {
    return "defendants";
  }

  get hasTimestamps() {
    return true;
  }

  gender() {
    return this.hasOne("Gender",'id','gender_id');
  }

  bails(){
    return this.hasMany('Bail')
  }
}

module.exports = bookshelf.model("Defendant", Defendant);
