exports.up = function (knex) {
  return knex.schema.createTable("addresses", (table) => {
    table.increments();
    table.string("street_number");
    table.string("street_name");
    table.string("apt_number");
    table.string("city");
    table.string("state");
    table.string("country");
    table.string("zipcode");
    table
      .integer("person_id")
      .references("id")
      .inTable("persons")
      .notNullable()
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("addresses");
};
