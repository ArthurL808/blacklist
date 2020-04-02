exports.up = function(knex) {
  return knex.schema.createTable("deragatoryMarks", table => {
    table.increments();
    table
      .integer("reason_id")
      .references("id")
      .inTable("reasons")
      .onDelete("CASCADE");
    table
      .integer("bail_id")
      .references("id")
      .inTable("bails")
      .onDelete("CASCADE");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table
      .integer("onPerson")
      .references("id")
      .inTable("persons")
      .notNullable()
      .onDelete("CASCADE");
    table.enu("personRole", ["defendant", "cosigner"]);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schame.dropTable("deragatoryMarks");
};
