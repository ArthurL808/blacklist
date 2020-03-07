exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("bails")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("bails").insert([
        {
          balance: false,
          user_id: 9
        },
        {
          balance: false,
          user_id: 6
        },
        {
          balance: false,
          user_id: 1
        },
        {
          balance: true,
          user_id: 3
        },
        {
          balance: true,
          user_id: 3
        },
        {
          balance: true,
          user_id: 1
        },
        {
          balance: true,
          user_id: 4
        },
        {
          balance: false,
          user_id: 8
        },
        {
          balance: true,
          user_id: 8
        },
        {
          balance: true,
          user_id: 7
        },
        {
          balance: false,
          user_id: 3
        },
        {
          balance: false,
          user_id: 1
        },
        {
          balance: true,
          user_id: 4
        },
        {
          balance: false,
          user_id: 2
        },
        {
          balance: false,
          user_id: 4
        },
        {
          balance: false,
          user_id: 1
        },
        {
          balance: true,
          user_id: 3
        },
        {
          balance: true,
          user_id: 7
        },
        {
          balance: true,
          user_id: 7
        },
        {
          balance: false,
          user_id: 3
        },
        {
          balance: false,
          user_id: 1
        },
        {
          balance: true,
          user_id: 9
        },
        {
          balance: true,
          user_id: 3
        },
        {
          balance: true,
          user_id: 5
        },
        {
          balance: false,
          user_id: 1
        },
        {
          balance: false,
          user_id: 4
        },
        {
          balance: true,
          user_id: 9
        },
        {
          balance: true,
          user_id: 5
        },
        {
          balance: true,
          user_id: 8
        },
        {
          balance: false,
          user_id: 2
        },
        {
          balance: false,
          user_id: 1
        },
        {
          balance: false,
          user_id: 6
        },
        {
          balance: false,
          user_id: 3
        },
        {
          balance: true,
          user_id: 9
        },
        {
          balance: false,
          user_id: 5
        },
        {
          balance: false,
          user_id: 4
        },
        {
          balance: true,
          user_id: 5
        },
        {
          balance: true,
          user_id: 6
        },
        {
          balance: false,
          user_id: 5
        },
        {
          balance: false,
          user_id: 6
        },
        {
          balance: false,
          user_id: 5
        },
        {
          balance: false,
          user_id: 1
        },
        {
          balance: true,
          user_id: 8
        },
        {
          balance: true,
          user_id: 4
        },
        {
          balance: true,
          user_id: 8
        },
        {
          balance: true,
          user_id: 10
        },
        {
          balance: true,
          user_id: 7
        },
        {
          balance: true,
          user_id: 9
        },
        {
          balance: false,
          user_id: 7
        },
        {
          balance: false,
          user_id: 2
        },
        {
          balance: false,
          user_id: 4
        },
        {
          balance: false,
          user_id: 2
        },
        {
          balance: true,
          user_id: 4
        },
        {
          balance: true,
          user_id: 4
        },
        {
          balance: false,
          user_id: 7
        },
        {
          balance: true,
          user_id: 10
        },
        {
          balance: false,
          user_id: 1
        },
        {
          balance: false,
          user_id: 7
        },
        {
          balance: true,
          user_id: 8
        },
        {
          balance: false,
          user_id: 10
        },
        {
          balance: true,
          user_id: 7
        },
        {
          balance: false,
          user_id: 7
        },
        {
          balance: false,
          user_id: 6
        },
        {
          balance: true,
          user_id: 5
        },
        {
          balance: true,
          user_id: 7
        },
        {
          balance: true,
          user_id: 3
        },
        {
          balance: false,
          user_id: 10
        },
        {
          balance: true,
          user_id: 6
        },
        {
          balance: false,
          user_id: 10
        },
        {
          balance: false,
          user_id: 4
        },
        {
          balance: true,
          user_id: 3
        },
        {
          balance: true,
          user_id: 9
        },
        {
          balance: true,
          user_id: 10
        },
        {
          balance: false,
          user_id: 6
        },
        {
          balance: false,
          user_id: 9
        },
        {
          balance: false,
          user_id: 7
        },
        {
          balance: false,
          user_id: 7
        },
        {
          balance: true,
          user_id: 8
        },
        {
          balance: true,
          user_id: 1
        },
        {
          balance: true,
          user_id: 10
        },
        {
          balance: false,
          user_id: 2
        },
        {
          balance: true,
          user_id: 10
        },
        {
          balance: false,
          user_id: 10
        },
        {
          balance: false,
          user_id: 6
        },
        {
          balance: false,
          user_id: 5
        },
        {
          balance: true,
          user_id: 7
        },
        {
          balance: false,
          user_id: 7
        },
        {
          balance: false,
          user_id: 3
        },
        {
          balance: true,
          user_id: 9
        },
        {
          balance: false,
          user_id: 6
        },
        {
          balance: true,
          user_id: 7
        },
        {
          balance: false,
          user_id: 9
        },
        {
          balance: false,
          user_id: 1
        },
        {
          balance: true,
          user_id: 9
        },
        {
          balance: true,
          user_id: 2
        },
        {
          balance: false,
          user_id: 7
        },
        {
          balance: false,
          user_id: 10
        },
        {
          balance: false,
          user_id: 4
        },
        {
          balance: false,
          user_id: 2
        },
        {
          balance: true,
          user_id: 3
        }
      ]);
    });
};
