exports.up = function (knex) {
    return knex.schema.createTable("addresses", (table) => {
      table.increments();
      table.string("street_address");
      table.integer("zipcode");
      table.string("apt_number");
      table
        .integer("person_id")
        .references("id")
        .inTable("persons")
        .notNullable()
        .onDelete("CASCADE");
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("addresses");
  };
  