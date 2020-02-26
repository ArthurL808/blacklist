
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {name: 'Arthur', email: 'artofbailhawaii@gmail.com', password: 'bigboss'},
      ]);
    });
};
