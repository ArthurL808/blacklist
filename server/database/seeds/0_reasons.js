exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('reasons').del()
    .then(function () {
      // Inserts seed entries
      return knex('reasons').insert([
        {reason: 'Non-payment'},
        {reason: 'Fraud'},
        {reason: 'Skipped Bail'},
        {reason: 'No Communication'},
        {reason: 'Aggressive'},
        {reason: 'Hiding fugitive'},
        {reason: 'Non-Compliance w/Terms'},
        {reason: 'Other'},
      ]);
    });
};
