exports.up = function(knex) {
  return knex.schema.createTable("bails", table => {
    table.increments();
    table.boolean("balance");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .notNullable()
      .onDelete("CASCADE");
    table
      .integer("defendant_id")
      .references("id")
      .inTable("persons")
      .notNullable()
      .onDelete("CASCADE");
    table
      .integer("cosigner_id")
      .references("id")
      .inTable("persons")
      .onDelete("CASCADE");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("bails");
};
