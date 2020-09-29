const bookshelf = require("../bookshelf");

class Person extends bookshelf.Model {
  get tableName() {
    return "persons";
  }

  get hasTimestamps() {
    return true;
  }

  gender() {
    return this.hasOne("Gender", "id", "gender_id");
  }

  blacklistedBy() {
    return this.belongsToMany("User").through("DeragatoryMark",'on_person');
  }

  reasons() {
    return this.belongsToMany("Reason").through(
      "DeragatoryMark",
      "on_person",
      "reason_id"
    );
  }

  marks() {
    return this.hasMany("DeragatoryMark",'on_person','id');
  }

  associates(){
    
    return this.hasMany('Associate')
  }

  addresses(){
    return this.hasMany('Address')
  }
}

module.exports = bookshelf.model("Person", Person);
