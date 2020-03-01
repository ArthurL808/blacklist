exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("bails")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("bails").insert([
        {
          balance: false,
          case_id: 45,
          cosigner_id: 21,
          user_id: 4
        },
        {
          balance: false,
          case_id: 60,
          cosigner_id: 53,
          user_id: 7
        },
        {
          balance: true,
          case_id: 66,
          cosigner_id: 44,
          user_id: 1
        },
        {
          balance: false,
          case_id: 59,
          cosigner_id: 34,
          user_id: 3
        },
        {
          balance: false,
          case_id: 36,
          cosigner_id: 43,
          user_id: 7
        },
        {
          balance: true,
          case_id: 31,
          cosigner_id: 53,
          user_id: 1
        },
        {
          balance: true,
          case_id: 60,
          cosigner_id: 71,
          user_id: 8
        },
        {
          balance: true,
          case_id: 44,
          user_id: 4
        },
        {
          balance: false,
          case_id: 51,
          cosigner_id: 44,
          user_id: 9
        },
        {
          balance: false,
          case_id: 46,
          cosigner_id: 38,
          user_id: 2
        },
        {
          balance: true,
          case_id: 53,
          cosigner_id: 9,
          user_id: 5
        },
        {
          balance: false,
          case_id: 43,
          cosigner_id: 41,
          user_id: 6
        },
        {
          balance: true,
          case_id: 49,
          cosigner_id: 60,
          user_id: 9
        },
        {
          balance: false,
          case_id: 62,
          cosigner_id: 57,
          user_id: 10
        },
        {
          balance: true,
          case_id: 44,
          cosigner_id: 67,
          user_id: 9
        },
        {
          balance: true,
          case_id: 42,
          cosigner_id: 62,
          user_id: 8
        },
        {
          balance: true,
          case_id: 39,
          cosigner_id: 8,
          user_id: 7
        },
        {
          balance: false,
          case_id: 21,
          cosigner_id: 40,
          user_id: 6
        },
        {
          balance: true,
          case_id: 6,
          cosigner_id: 2,
          user_id: 4
        },
        {
          balance: false,
          case_id: 38,
          cosigner_id: 70,
          user_id: 5
        },
        {
          balance: true,
          case_id: 1,
          cosigner_id: 39,
          user_id: 3
        },
        {
          balance: true,
          case_id: 33,
          cosigner_id: 34,
          user_id: 8
        },
        {
          balance: true,
          case_id: 6,
          cosigner_id: 4,
          user_id: 1
        },
        {
          balance: false,
          case_id: 22,
          cosigner_id: 20,
          user_id: 4
        },
        {
          balance: true,
          case_id: 46,
          cosigner_id: 35,
          user_id: 5
        },
        {
          balance: true,
          case_id: 38,
          cosigner_id: 58,
          user_id: 5
        },
        {
          balance: false,
          case_id: 38,
          cosigner_id: 44,
          user_id: 1
        },
        {
          balance: true,
          case_id: 14,
          cosigner_id: 3,
          user_id: 5
        },
        {
          balance: true,
          case_id: 47,
          cosigner_id: 36,
          user_id: 1
        },
        {
          balance: true,
          case_id: 70,
          cosigner_id: 13,
          user_id: 3
        },
        {
          balance: true,
          case_id: 58,
          cosigner_id: 8,
          user_id: 8
        },
        {
          balance: true,
          case_id: 38,
          cosigner_id: 33,
          user_id: 3
        },
        {
          balance: true,
          case_id: 6,
          user_id: 7
        },
        {
          balance: false,
          case_id: 43,
          cosigner_id: 45,
          user_id: 10
        },
        {
          balance: true,
          case_id: 38,
          cosigner_id: 36,
          user_id: 6
        },
        {
          balance: true,
          case_id: 6,
          cosigner_id: 69,
          user_id: 8
        },
        {
          balance: true,
          case_id: 60,
          cosigner_id: 46,
          user_id: 8
        },
        {
          balance: false,
          case_id: 32,
          cosigner_id: 48,
          user_id: 10
        },
        {
          balance: true,
          case_id: 4,
          user_id: 3
        },
        {
          balance: true,
          case_id: 51,
          user_id: 4
        },
        {
          balance: true,
          case_id: 23,
          cosigner_id: 54,
          user_id: 3
        },
        {
          balance: false,
          case_id: 28,
          cosigner_id: 25,
          user_id: 2
        },
        {
          balance: true,
          case_id: 75,
          cosigner_id: 60,
          user_id: 7
        },
        {
          balance: true,
          case_id: 36,
          cosigner_id: 12,
          user_id: 5
        },
        {
          balance: true,
          case_id: 48,
          cosigner_id: 69,
          user_id: 4
        },
        {
          balance: false,
          case_id: 2,
          cosigner_id: 36,
          user_id: 1
        },
        {
          balance: false,
          case_id: 26,
          cosigner_id: 49,
          user_id: 7
        },
        {
          balance: true,
          case_id: 9,
          cosigner_id: 36,
          user_id: 9
        },
        {
          balance: true,
          case_id: 19,
          cosigner_id: 30,
          user_id: 1
        },
        {
          balance: false,
          case_id: 60,
          cosigner_id: 32,
          user_id: 9
        },
        {
          balance: true,
          case_id: 13,
          cosigner_id: 25,
          user_id: 9
        },
        {
          balance: false,
          case_id: 70,
          cosigner_id: 30,
          user_id: 7
        },
        {
          balance: false,
          case_id: 15,
          cosigner_id: 18,
          user_id: 5
        },
        {
          balance: true,
          case_id: 48,
          cosigner_id: 48,
          user_id: 2
        },
        {
          balance: false,
          case_id: 72,
          cosigner_id: 29,
          user_id: 7
        },
        {
          balance: false,
          case_id: 6,
          cosigner_id: 30,
          user_id: 7
        },
        {
          balance: false,
          case_id: 48,
          cosigner_id: 19,
          user_id: 9
        },
        {
          balance: true,
          case_id: 23,
          cosigner_id: 31,
          user_id: 10
        },
        {
          balance: true,
          case_id: 20,
          cosigner_id: 48,
          user_id: 4
        },
        {
          balance: false,
          case_id: 46,
          cosigner_id: 35,
          user_id: 10
        },
        {
          balance: true,
          case_id: 10,
          cosigner_id: 75,
          user_id: 6
        },
        {
          balance: false,
          case_id: 59,
          cosigner_id: 74,
          user_id: 3
        },
        {
          balance: true,
          case_id: 45,
          cosigner_id: 45,
          user_id: 3
        },
        {
          balance: false,
          case_id: 30,
          cosigner_id: 61,
          user_id: 1
        },
        {
          balance: true,
          case_id: 34,
          cosigner_id: 32,
          user_id: 2
        },
        {
          balance: true,
          case_id: 53,
          cosigner_id: 40,
          user_id: 7
        },
        {
          balance: false,
          case_id: 59,
          cosigner_id: 49,
          user_id: 8
        },
        {
          balance: true,
          case_id: 19,
          cosigner_id: 13,
          user_id: 5
        },
        {
          balance: true,
          case_id: 70,
          cosigner_id: 12,
          user_id: 5
        },
        {
          balance: false,
          case_id: 37,
          user_id: 5
        },
        {
          balance: true,
          case_id: 47,
          cosigner_id: 9,
          user_id: 6
        },
        {
          balance: true,
          case_id: 25,
          cosigner_id: 40,
          user_id: 2
        },
        {
          balance: true,
          case_id: 38,
          user_id: 7
        },
        {
          balance: false,
          case_id: 9,
          cosigner_id: 28,
          user_id: 6
        },
        {
          balance: true,
          case_id: 2,
          cosigner_id: 2,
          user_id: 5
        },
        {
          balance: true,
          case_id: 18,
          cosigner_id: 45,
          user_id: 6
        },
        {
          balance: true,
          case_id: 13,
          cosigner_id: 73,
          user_id: 3
        },
        {
          balance: false,
          case_id: 12,
          cosigner_id: 8,
          user_id: 1
        },
        {
          balance: false,
          case_id: 5,
          cosigner_id: 48,
          user_id: 5
        },
        {
          balance: true,
          case_id: 35,
          cosigner_id: 39,
          user_id: 5
        },
        {
          balance: false,
          case_id: 16,
          cosigner_id: 13,
          user_id: 5
        },
        {
          balance: true,
          case_id: 54,
          cosigner_id: 57,
          user_id: 8
        },
        {
          balance: false,
          case_id: 24,
          cosigner_id: 16,
          user_id: 1
        },
        {
          balance: false,
          case_id: 51,
          cosigner_id: 15,
          user_id: 3
        },
        {
          balance: false,
          case_id: 32,
          cosigner_id: 63,
          user_id: 6
        },
        {
          balance: false,
          case_id: 6,
          user_id: 2
        },
        {
          balance: true,
          case_id: 13,
          user_id: 9
        },
        {
          balance: false,
          case_id: 31,
          cosigner_id: 27,
          user_id: 7
        },
        {
          balance: false,
          case_id: 67,
          user_id: 1
        },
        {
          balance: true,
          case_id: 65,
          cosigner_id: 33,
          user_id: 5
        },
        {
          balance: true,
          case_id: 37,
          cosigner_id: 25,
          user_id: 10
        },
        {
          balance: true,
          case_id: 68,
          cosigner_id: 70,
          user_id: 10
        },
        {
          balance: true,
          case_id: 24,
          cosigner_id: 9,
          user_id: 5
        },
        {
          balance: true,
          case_id: 42,
          cosigner_id: 61,
          user_id: 4
        },
        {
          balance: true,
          case_id: 50,
          cosigner_id: 69,
          user_id: 2
        },
        {
          balance: true,
          case_id: 9,
          cosigner_id: 1,
          user_id: 10
        },
        {
          balance: true,
          case_id: 19,
          cosigner_id: 60,
          user_id: 3
        },
        {
          balance: false,
          case_id: 54,
          cosigner_id: 64,
          user_id: 3
        },
        {
          balance: true,
          case_id: 25,
          cosigner_id: 10,
          user_id: 9
        },
        {
          balance: true,
          case_id: 10,
          cosigner_id: 44,
          user_id: 3
        }
      ]);
    });
};
