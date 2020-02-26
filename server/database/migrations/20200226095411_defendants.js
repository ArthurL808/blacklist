exports.up = function(knex) {
  return knex.schema.createTable("defendants", table => {
    table.increments();
    table.string("first_name");
    table.string("last_name");
    table.enu("gender", ["Male", "Female"]);
    table.string("address");
    table.date("dob");
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("defendants");
};
