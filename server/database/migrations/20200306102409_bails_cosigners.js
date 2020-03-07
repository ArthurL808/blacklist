exports.up = function(knex) {
  return knex.schema.createTable("bails_cosigners", table => {
    table.increments();
    table
      .integer("bail_id")
      .references("id")
      .inTable("bails")
      .onDelete("CASCADE");
    table
      .integer("cosigner_id")
      .references("id")
      .inTable("cosigners")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("bails_cosigners");
};
