exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("bails_cases")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("bails_cases").insert([
        {
          bail_id: 28,
          case_id: 23
        },
        {
          bail_id: 31,
          case_id: 19
        },
        {
          bail_id: 21,
          case_id: 79
        },
        {
          bail_id: 21,
          case_id: 70
        },
        {
          bail_id: 30,
          case_id: 41
        },
        {
          bail_id: 21,
          case_id: 52
        },
        {
          bail_id: 66,
          case_id: 8
        },
        {
          bail_id: 66,
          case_id: 33
        },
        {
          bail_id: 51,
          case_id: 17
        },
        {
          bail_id: 67,
          case_id: 5
        },
        {
          bail_id: 88,
          case_id: 37
        },
        {
          bail_id: 90,
          case_id: 95
        },
        {
          bail_id: 86,
          case_id: 69
        },
        {
          bail_id: 81,
          case_id: 58
        },
        {
          bail_id: 14,
          case_id: 42
        },
        {
          bail_id: 72,
          case_id: 88
        },
        {
          bail_id: 17,
          case_id: 83
        },
        {
          bail_id: 98,
          case_id: 97
        },
        {
          bail_id: 24,
          case_id: 69
        },
        {
          bail_id: 94,
          case_id: 57
        },
        {
          bail_id: 93,
          case_id: 20
        },
        {
          bail_id: 62,
          case_id: 74
        },
        {
          bail_id: 51,
          case_id: 92
        },
        {
          bail_id: 10,
          case_id: 12
        },
        {
          bail_id: 85,
          case_id: 34
        },
        {
          bail_id: 3,
          case_id: 30
        },
        {
          bail_id: 75,
          case_id: 45
        },
        {
          bail_id: 58,
          case_id: 47
        },
        {
          bail_id: 63,
          case_id: 36
        },
        {
          bail_id: 34,
          case_id: 8
        },
        {
          bail_id: 23,
          case_id: 18
        },
        {
          bail_id: 54,
          case_id: 52
        },
        {
          bail_id: 3,
          case_id: 86
        },
        {
          bail_id: 63,
          case_id: 5
        },
        {
          bail_id: 44,
          case_id: 22
        },
        {
          bail_id: 41,
          case_id: 84
        },
        {
          bail_id: 27,
          case_id: 67
        },
        {
          bail_id: 51,
          case_id: 60
        },
        {
          bail_id: 85,
          case_id: 68
        },
        {
          bail_id: 31,
          case_id: 94
        },
        {
          bail_id: 13,
          case_id: 42
        },
        {
          bail_id: 95,
          case_id: 46
        },
        {
          bail_id: 27,
          case_id: 90
        },
        {
          bail_id: 68,
          case_id: 10
        },
        {
          bail_id: 9,
          case_id: 23
        },
        {
          bail_id: 27,
          case_id: 99
        },
        {
          bail_id: 4,
          case_id: 13
        },
        {
          bail_id: 40,
          case_id: 56
        },
        {
          bail_id: 69,
          case_id: 6
        },
        {
          bail_id: 96,
          case_id: 90
        },
        {
          bail_id: 59,
          case_id: 55
        },
        {
          bail_id: 97,
          case_id: 41
        },
        {
          bail_id: 94,
          case_id: 8
        },
        {
          bail_id: 23,
          case_id: 72
        },
        {
          bail_id: 7,
          case_id: 49
        },
        {
          bail_id: 13,
          case_id: 5
        },
        {
          bail_id: 97,
          case_id: 80
        },
        {
          bail_id: 35,
          case_id: 60
        },
        {
          bail_id: 13,
          case_id: 42
        },
        {
          bail_id: 62,
          case_id: 51
        },
        {
          bail_id: 53,
          case_id: 82
        },
        {
          bail_id: 42,
          case_id: 57
        },
        {
          bail_id: 77,
          case_id: 95
        },
        {
          bail_id: 2,
          case_id: 52
        },
        {
          bail_id: 49,
          case_id: 47
        },
        {
          bail_id: 70,
          case_id: 6
        },
        {
          bail_id: 86,
          case_id: 78
        },
        {
          bail_id: 4,
          case_id: 95
        },
        {
          bail_id: 58,
          case_id: 9
        },
        {
          bail_id: 56,
          case_id: 8
        },
        {
          bail_id: 23,
          case_id: 83
        },
        {
          bail_id: 85,
          case_id: 77
        },
        {
          bail_id: 18,
          case_id: 69
        },
        {
          bail_id: 15,
          case_id: 79
        },
        {
          bail_id: 29,
          case_id: 39
        },
        {
          bail_id: 30,
          case_id: 66
        },
        {
          bail_id: 11,
          case_id: 41
        },
        {
          bail_id: 1,
          case_id: 25
        },
        {
          bail_id: 27,
          case_id: 68
        },
        {
          bail_id: 3,
          case_id: 1
        },
        {
          bail_id: 53,
          case_id: 73
        },
        {
          bail_id: 35,
          case_id: 65
        },
        {
          bail_id: 9,
          case_id: 85
        },
        {
          bail_id: 89,
          case_id: 54
        },
        {
          bail_id: 19,
          case_id: 93
        },
        {
          bail_id: 66,
          case_id: 8
        },
        {
          bail_id: 66,
          case_id: 6
        },
        {
          bail_id: 12,
          case_id: 54
        },
        {
          bail_id: 36,
          case_id: 74
        },
        {
          bail_id: 41,
          case_id: 45
        },
        {
          bail_id: 27,
          case_id: 12
        },
        {
          bail_id: 78,
          case_id: 42
        },
        {
          bail_id: 4,
          case_id: 75
        },
        {
          bail_id: 13,
          case_id: 99
        },
        {
          bail_id: 73,
          case_id: 75
        },
        {
          bail_id: 88,
          case_id: 90
        },
        {
          bail_id: 32,
          case_id: 20
        },
        {
          bail_id: 9,
          case_id: 58
        },
        {
          bail_id: 2,
          case_id: 98
        },
        {
          bail_id: 57,
          case_id: 44
        }
      ]);
    });
};
