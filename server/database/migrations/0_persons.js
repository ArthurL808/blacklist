exports.up = function (knex) {
  return knex.schema.createTable("persons", (table) => {
    table.increments();
    table.string("first_name");
    table.string("last_name");
    table.string("image_url");
    table.date("dob");
    table.decimal('height');
    table.integer('weight')
    table
      .integer("gender_id")
      .references("id")
      .inTable("genders")
      .notNullable()
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("persons");
};
