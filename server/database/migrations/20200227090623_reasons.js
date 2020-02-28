exports.up = function(knex) {
  return knex.schema.createTable("reasons", table => {
    table.increments();
    table.string("reason");
    table.timestamps(true,true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("reasons");
};
