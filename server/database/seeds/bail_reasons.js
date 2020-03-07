exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("bails_reasons")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("bails_reasons").insert([
        {
          reason_id: 7,
          bail_id: 53
        },
        {
          reason_id: 2,
          bail_id: 91
        },
        {
          reason_id: 7,
          bail_id: 52
        },
        {
          reason_id: 3,
          bail_id: 16
        },
        {
          reason_id: 5,
          bail_id: 13
        },
        {
          reason_id: 5,
          bail_id: 61
        },
        {
          reason_id: 1,
          bail_id: 95
        },
        {
          reason_id: 4,
          bail_id: 30
        },
        {
          reason_id: 4,
          bail_id: 53
        },
        {
          reason_id: 5,
          bail_id: 86
        },
        {
          reason_id: 2,
          bail_id: 39
        },
        {
          reason_id: 6,
          bail_id: 43
        },
        {
          reason_id: 8,
          bail_id: 11
        },
        {
          reason_id: 5,
          bail_id: 74
        },
        {
          reason_id: 4,
          bail_id: 45
        },
        {
          reason_id: 3,
          bail_id: 52
        },
        {
          reason_id: 8,
          bail_id: 36
        },
        {
          reason_id: 7,
          bail_id: 81
        },
        {
          reason_id: 2,
          bail_id: 34
        },
        {
          reason_id: 1,
          bail_id: 83
        },
        {
          reason_id: 3,
          bail_id: 84
        },
        {
          reason_id: 4,
          bail_id: 28
        },
        {
          reason_id: 8,
          bail_id: 84
        },
        {
          reason_id: 7,
          bail_id: 23
        },
        {
          reason_id: 4,
          bail_id: 88
        },
        {
          reason_id: 6,
          bail_id: 21
        },
        {
          reason_id: 6,
          bail_id: 35
        },
        {
          reason_id: 4,
          bail_id: 88
        },
        {
          reason_id: 3,
          bail_id: 1
        },
        {
          reason_id: 7,
          bail_id: 67
        },
        {
          reason_id: 5,
          bail_id: 98
        },
        {
          reason_id: 5,
          bail_id: 71
        },
        {
          reason_id: 1,
          bail_id: 80
        },
        {
          reason_id: 5,
          bail_id: 79
        },
        {
          reason_id: 6,
          bail_id: 58
        },
        {
          reason_id: 2,
          bail_id: 36
        },
        {
          reason_id: 3,
          bail_id: 50
        },
        {
          reason_id: 7,
          bail_id: 84
        },
        {
          reason_id: 6,
          bail_id: 70
        },
        {
          reason_id: 8,
          bail_id: 41
        },
        {
          reason_id: 5,
          bail_id: 35
        },
        {
          reason_id: 6,
          bail_id: 43
        },
        {
          reason_id: 5,
          bail_id: 10
        },
        {
          reason_id: 3,
          bail_id: 39
        },
        {
          reason_id: 7,
          bail_id: 69
        },
        {
          reason_id: 5,
          bail_id: 90
        },
        {
          reason_id: 8,
          bail_id: 9
        },
        {
          reason_id: 2,
          bail_id: 67
        },
        {
          reason_id: 2,
          bail_id: 63
        },
        {
          reason_id: 1,
          bail_id: 86
        },
        {
          reason_id: 3,
          bail_id: 4
        },
        {
          reason_id: 5,
          bail_id: 94
        },
        {
          reason_id: 8,
          bail_id: 67
        },
        {
          reason_id: 6,
          bail_id: 47
        },
        {
          reason_id: 2,
          bail_id: 99
        },
        {
          reason_id: 6,
          bail_id: 52
        },
        {
          reason_id: 4,
          bail_id: 60
        },
        {
          reason_id: 5,
          bail_id: 21
        },
        {
          reason_id: 6,
          bail_id: 82
        },
        {
          reason_id: 8,
          bail_id: 80
        },
        {
          reason_id: 8,
          bail_id: 23
        },
        {
          reason_id: 8,
          bail_id: 53
        },
        {
          reason_id: 2,
          bail_id: 34
        },
        {
          reason_id: 3,
          bail_id: 9
        },
        {
          reason_id: 4,
          bail_id: 83
        },
        {
          reason_id: 3,
          bail_id: 27
        },
        {
          reason_id: 1,
          bail_id: 22
        },
        {
          reason_id: 1,
          bail_id: 83
        },
        {
          reason_id: 2,
          bail_id: 27
        },
        {
          reason_id: 4,
          bail_id: 67
        },
        {
          reason_id: 2,
          bail_id: 24
        },
        {
          reason_id: 2,
          bail_id: 53
        },
        {
          reason_id: 7,
          bail_id: 27
        },
        {
          reason_id: 3,
          bail_id: 74
        },
        {
          reason_id: 3,
          bail_id: 18
        },
        {
          reason_id: 8,
          bail_id: 81
        },
        {
          reason_id: 6,
          bail_id: 28
        },
        {
          reason_id: 1,
          bail_id: 25
        },
        {
          reason_id: 7,
          bail_id: 53
        },
        {
          reason_id: 4,
          bail_id: 24
        },
        {
          reason_id: 3,
          bail_id: 84
        },
        {
          reason_id: 6,
          bail_id: 18
        },
        {
          reason_id: 4,
          bail_id: 31
        },
        {
          reason_id: 5,
          bail_id: 14
        },
        {
          reason_id: 7,
          bail_id: 93
        },
        {
          reason_id: 4,
          bail_id: 47
        },
        {
          reason_id: 4,
          bail_id: 41
        },
        {
          reason_id: 4,
          bail_id: 4
        },
        {
          reason_id: 1,
          bail_id: 36
        },
        {
          reason_id: 3,
          bail_id: 35
        },
        {
          reason_id: 4,
          bail_id: 99
        },
        {
          reason_id: 4,
          bail_id: 63
        },
        {
          reason_id: 2,
          bail_id: 92
        },
        {
          reason_id: 2,
          bail_id: 75
        },
        {
          reason_id: 5,
          bail_id: 58
        },
        {
          reason_id: 8,
          bail_id: 49
        },
        {
          reason_id: 4,
          bail_id: 46
        },
        {
          reason_id: 2,
          bail_id: 99
        },
        {
          reason_id: 7,
          bail_id: 48
        },
        {
          reason_id: 4,
          bail_id: 94
        }
      ]);
    });
};
