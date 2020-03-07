exports.up = function(knex) {
  return knex.schema.createTable("bails", (table) => {
    table.increments();
    table.boolean("balance");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("bails");
};
