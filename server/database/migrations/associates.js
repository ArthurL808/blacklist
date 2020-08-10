exports.up = function (knex) {
  return knex.schema.createTable("associates", (table) => {
    table.increments();
    table.string("first_name");
    table.string("last_name");
    table.string("nickname");
    table.string("relationship");
    table
      .integer("person_id")
      .references("id")
      .inTable("persons")
      .notNullable()
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("associates");
};
