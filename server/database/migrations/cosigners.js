exports.up = function(knex) {
  return knex.schema.createTable("cosigners", table => {
    table.increments();
    table.string("first_name");
    table.string("last_name");
    table.date("dob");
    table
      .integer("gender_id")
      .references("id")
      .inTable("genders")
      .notNullable()
      .onDelete("CASCADE");
    table
      .integer("bail_id")
      .references("id")
      .inTable("bails")
      .notNullable()
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("cosigners");
};
