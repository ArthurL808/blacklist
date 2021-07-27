exports.up = function (knex) {
  return knex.schema.createTable("deragatoryMarks", (table) => {
    table.increments();
    table.boolean("non_payment");
    table.boolean("fraud");
    table.boolean("skipped_bail");
    table.boolean("aggressive");
    table.boolean("hiding_fugitive");
    table.boolean("non_compliance_with_terms");
    table.boolean("no_communication");
    table.boolean("other");
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .notNullable()
      .onDelete("CASCADE");
    table
      .integer("on_person")
      .references("id")
      .inTable("persons")
      .notNullable()
      .onDelete("CASCADE");
    table.unique(["on_person", "user_id"]);
    // table.enu("person_role", ["defendant", "cosigner"]);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("deragatoryMarks");
};
