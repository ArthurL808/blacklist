exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("bails")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("bails").insert([
        {
          balance: true,
          user_id: 6,
          defendant_id: 14
        },
        {
          balance: true,
          user_id: 7,
          defendant_id: 2
        },
        {
          balance: false,
          user_id: 2,
          defendant_id: 23
        },
        {
          balance: true,
          user_id: 9,
          defendant_id: 2
        },
        {
          balance: true,
          user_id: 3,
          defendant_id: 5
        },
        {
          balance: false,
          user_id: 4,
          defendant_id: 6
        },
        {
          balance: true,
          user_id: 9,
          defendant_id: 24
        },
        {
          balance: false,
          user_id: 7,
          defendant_id: 25
        },
        {
          balance: true,
          user_id: 5,
          defendant_id: 23
        },
        {
          balance: true,
          user_id: 4,
          defendant_id: 17
        },
        {
          balance: false,
          user_id: 6,
          defendant_id: 17
        },
        {
          balance: true,
          user_id: 5,
          defendant_id: 10
        },
        {
          balance: true,
          user_id: 9,
          defendant_id: 21
        },
        {
          balance: false,
          user_id: 5,
          defendant_id: 9
        },
        {
          balance: true,
          user_id: 8,
          defendant_id: 8
        },
        {
          balance: false,
          user_id: 3,
          defendant_id: 15
        },
        {
          balance: true,
          user_id: 3,
          defendant_id: 14
        },
        {
          balance: true,
          user_id: 3,
          defendant_id: 25
        },
        {
          balance: true,
          user_id: 2,
          defendant_id: 18
        },
        {
          balance: false,
          user_id: 4,
          defendant_id: 8
        },
        {
          balance: false,
          user_id: 9,
          defendant_id: 17
        },
        {
          balance: true,
          user_id: 6,
          defendant_id: 8
        },
        {
          balance: true,
          user_id: 9,
          defendant_id: 18
        },
        {
          balance: false,
          user_id: 9,
          defendant_id: 10
        },
        {
          balance: true,
          user_id: 7,
          defendant_id: 22
        },
        {
          balance: true,
          user_id: 9,
          defendant_id: 5
        },
        {
          balance: true,
          user_id: 9,
          defendant_id: 19
        },
        {
          balance: false,
          user_id: 3,
          defendant_id: 19
        },
        {
          balance: false,
          user_id: 10,
          defendant_id: 12
        },
        {
          balance: false,
          user_id: 8,
          defendant_id: 2
        },
        {
          balance: true,
          user_id: 4,
          defendant_id: 4
        },
        {
          balance: true,
          user_id: 6,
          defendant_id: 7
        },
        {
          balance: true,
          user_id: 5,
          defendant_id: 7
        },
        {
          balance: false,
          user_id: 10,
          defendant_id: 17
        },
        {
          balance: false,
          user_id: 8,
          defendant_id: 18
        }
      ]);
    });
};
