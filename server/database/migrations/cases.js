exports.up = function(knex) {
  return knex.schema.createTable("cases", table => {
    table.increments();
    table.string("caseNumber");
    table.decimal("bailAmount");
    table
      .integer("bail_id")
      .references("id")
      .inTable("bails")
      .notNullable()
      .onDelete("CASCADE");
    table.enu("severity", ["felony", "misdemeanor"]);
    table.enu("violence", ["violent", "non-violent"]);
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("cases");
};
