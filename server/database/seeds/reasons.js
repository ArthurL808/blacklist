
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reasons').del()
    .then(function () {
      // Inserts seed entries
      return knex('reasons').insert([
        {name: 'Non-payment'},
        {name: 'Fraud'},
        {name: 'Skipped Bail'},
        {name: 'No Communication'},
        {name: 'Aggressive'},
        {name: 'Hiding fugitive'},
        {name: 'Non-Compliance w/Terms'},
        {name: 'Other'},
      ]);
    });
};
