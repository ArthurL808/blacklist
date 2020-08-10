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
    return this.belongsToMany("User").through("DeragatoryMark",'onPerson');
  }

  reasons() {
    return this.belongsToMany("Reason").through(
      "DeragatoryMark",
      "onPerson",
      "reason_id"
    );
  }

  marks() {
    return this.hasMany("DeragatoryMark",'onPerson','id');
  }

  associates(){
    
    return this.hasMany('Associate')
  }
}

module.exports = bookshelf.model("Person", Person);
