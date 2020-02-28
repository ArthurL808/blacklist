exports.up = function(knex) {
  return knex.schema.createTable("coSigners", table => {
    table.increments();
    table.string("first_name");
    table.string("last_name");
    table.date("dob");
    table
      .integer("gender_id")
      .references("id")
      .inTable("genders")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("coSigners");
};
