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
    return this.belongsToMany("User").through("DeragatoryMarks",'onPerson');
  }
  defendantOn() {
    return this.hasMany("Bail", "defendant_id", "id");
  }

  cosignerOn() {
    return this.hasMany("Bail", "cosigner_id", "id");
  }

  reasons() {
    return this.belongsToMany("Reason").through(
      "DeragatoryMarks",
      "onPerson",
      "reason_id"
    );
  }

  cases() {
    return this.hasMany("Case", "defendant_id").through("Bail", "bail_id");
  }

  marks() {
    return this.hasMany("DeragatoryMarks",'onPerson','id');
  }
}

module.exports = bookshelf.model("Person", Person);
