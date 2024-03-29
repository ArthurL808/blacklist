exports.up = function (knex) {
  return knex.schema.createTable("hunts", (table) => {
    table.increments();
    table.boolean("active");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("person_id")
      .references("id")
      .inTable("persons")
      .onDelete("CASCADE");
    table.boolean("known_to_carry_weapon");
    table.boolean("charged_with_violent_crime");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("hunts");
};
