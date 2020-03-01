exports.up = function(knex) {
  return knex.schema.createTable("blacklistReasons", table => {
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
  return knex.schame.dropTable("blacklistReasons");
};
