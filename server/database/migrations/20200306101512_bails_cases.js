exports.up = function(knex) {
  return knex.schema.createTable("bails_cases", table => {
    table.increments();
    table
      .integer("bail_id")
      .references("id")
      .inTable("bails")
      .onDelete("CASCADE");
    table
      .integer("case_id")
      .references("id")
      .inTable("cases")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("bails_cases");
};
