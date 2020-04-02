exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("bails")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("bails").insert([
        {
          balance: true,
          user_id: 4,
          defendant_id: 4,
          cosigner_id: 3
        },
        {
          balance: true,
          user_id: 5,
          defendant_id: 2,
          cosigner_id: 5
        },
        {
          balance: false,
          user_id: 5,
          defendant_id: 5,
          cosigner_id: 4
        },
        {
          balance: false,
          user_id: 3,
          defendant_id: 2,
          cosigner_id: 8
        },
        {
          balance: true,
          user_id: 2,
          defendant_id: 9,
          cosigner_id: 10
        },
        {
          balance: false,
          user_id: 2,
          defendant_id: 3,
          cosigner_id: 8
        },
        {
          balance: false,
          user_id: 5,
          defendant_id: 10,
          cosigner_id: 2
        },
        {
          balance: false,
          user_id: 4,
          defendant_id: 10,
          cosigner_id: 8
        },
        {
          balance: true,
          user_id: 3,
          defendant_id: 10,
          cosigner_id: 4
        },
        {
          balance: true,
          user_id: 4,
          defendant_id: 7,
          cosigner_id: 4
        },
        {
          balance: false,
          user_id: 1,
          defendant_id: 1,
          cosigner_id: null
        },
        {
          balance: false,
          user_id: 1,
          defendant_id: 7,
          cosigner_id: 10
        },
        {
          balance: true,
          user_id: 3,
          defendant_id: 8,
          cosigner_id: null
        },
        {
          balance: false,
          user_id: 1,
          defendant_id: 2,
          cosigner_id: 6
        },
        {
          balance: false,
          user_id: 2,
          defendant_id: 7,
          cosigner_id: 4
        }
      ]);
    });
};
