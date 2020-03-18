exports.up = function(knex) {
  return knex.schema.createTable("bails_reasons", table => {
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
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schame.dropTable("bails_reasons");
};
