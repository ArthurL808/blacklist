exports.up = function(knex) {
  return knex.schema.createTable("bails", (table) => {
    table.increments();
    table.boolean("balance");
    table
      .integer("case_id")
      .references("id")
      .inTable("cases")
      .onDelete("CASCADE");
    table
      .integer("cosigner_id")
      .references("id")
      .inTable("coSigners")
      .onDelete("CASCADE");
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
