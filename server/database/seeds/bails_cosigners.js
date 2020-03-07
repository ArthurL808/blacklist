exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("bails_cosigners")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("bails_cosigners").insert([
        {
          bail_id: 11,
          cosigner_id: 35
        },
        {
          bail_id: 21,
          cosigner_id: 13
        },
        {
          bail_id: 21,
          cosigner_id: 37
        },
        {
          bail_id: 61,
          cosigner_id: 2
        },
        {
          bail_id: 19,
          cosigner_id: 31
        },
        {
          bail_id: 47,
          cosigner_id: 18
        },
        {
          bail_id: 74,
          cosigner_id: 1
        },
        {
          bail_id: 94,
          cosigner_id: 20
        },
        {
          bail_id: 5,
          cosigner_id: 63
        },
        {
          bail_id: 71,
          cosigner_id: 11
        },
        {
          bail_id: 43,
          cosigner_id: 33
        },
        {
          bail_id: 95,
          cosigner_id: 36
        },
        {
          bail_id: 93,
          cosigner_id: 33
        },
        {
          bail_id: 72,
          cosigner_id: 17
        },
        {
          bail_id: 23,
          cosigner_id: 50
        },
        {
          bail_id: 37,
          cosigner_id: 10
        },
        {
          bail_id: 45,
          cosigner_id: 42
        },
        {
          bail_id: 59,
          cosigner_id: 19
        },
        {
          bail_id: 33,
          cosigner_id: 22
        },
        {
          bail_id: 81,
          cosigner_id: 39
        },
        {
          bail_id: 85,
          cosigner_id: 44
        },
        {
          bail_id: 80,
          cosigner_id: 49
        },
        {
          bail_id: 28,
          cosigner_id: 48
        },
        {
          bail_id: 67,
          cosigner_id: 58
        },
        {
          bail_id: 19,
          cosigner_id: 52
        },
        {
          bail_id: 85,
          cosigner_id: 27
        },
        {
          bail_id: 90,
          cosigner_id: 55
        },
        {
          bail_id: 85,
          cosigner_id: 49
        },
        {
          bail_id: 3,
          cosigner_id: 49
        },
        {
          bail_id: 93,
          cosigner_id: 69
        },
        {
          bail_id: 93,
          cosigner_id: 29
        },
        {
          bail_id: 43,
          cosigner_id: 9
        },
        {
          bail_id: 95,
          cosigner_id: 61
        },
        {
          bail_id: 42,
          cosigner_id: 67
        },
        {
          bail_id: 39,
          cosigner_id: 4
        },
        {
          bail_id: 66,
          cosigner_id: 25
        },
        {
          bail_id: 8,
          cosigner_id: 47
        },
        {
          bail_id: 79,
          cosigner_id: 12
        },
        {
          bail_id: 96,
          cosigner_id: 28
        },
        {
          bail_id: 34,
          cosigner_id: 1
        },
        {
          bail_id: 20,
          cosigner_id: 63
        },
        {
          bail_id: 78,
          cosigner_id: 43
        },
        {
          bail_id: 62,
          cosigner_id: 45
        },
        {
          bail_id: 6,
          cosigner_id: 65
        },
        {
          bail_id: 83,
          cosigner_id: 40
        },
        {
          bail_id: 24,
          cosigner_id: 53
        },
        {
          bail_id: 38,
          cosigner_id: 50
        },
        {
          bail_id: 82,
          cosigner_id: 11
        },
        {
          bail_id: 30,
          cosigner_id: 60
        },
        {
          bail_id: 6,
          cosigner_id: 55
        },
        {
          bail_id: 35,
          cosigner_id: 54
        },
        {
          bail_id: 68,
          cosigner_id: 37
        },
        {
          bail_id: 26,
          cosigner_id: 54
        },
        {
          bail_id: 49,
          cosigner_id: 13
        },
        {
          bail_id: 29,
          cosigner_id: 2
        },
        {
          bail_id: 69,
          cosigner_id: 64
        },
        {
          bail_id: 86,
          cosigner_id: 2
        },
        {
          bail_id: 43,
          cosigner_id: 59
        },
        {
          bail_id: 24,
          cosigner_id: 28
        },
        {
          bail_id: 19,
          cosigner_id: 46
        },
        {
          bail_id: 15,
          cosigner_id: 38
        },
        {
          bail_id: 96,
          cosigner_id: 59
        },
        {
          bail_id: 70,
          cosigner_id: 40
        },
        {
          bail_id: 96,
          cosigner_id: 68
        },
        {
          bail_id: 61,
          cosigner_id: 2
        },
        {
          bail_id: 63,
          cosigner_id: 61
        },
        {
          bail_id: 60,
          cosigner_id: 29
        },
        {
          bail_id: 7,
          cosigner_id: 30
        },
        {
          bail_id: 73,
          cosigner_id: 23
        },
        {
          bail_id: 98,
          cosigner_id: 67
        },
        {
          bail_id: 97,
          cosigner_id: 66
        },
        {
          bail_id: 97,
          cosigner_id: 41
        },
        {
          bail_id: 75,
          cosigner_id: 21
        },
        {
          bail_id: 37,
          cosigner_id: 20
        },
        {
          bail_id: 35,
          cosigner_id: 38
        },
        {
          bail_id: 89,
          cosigner_id: 47
        },
        {
          bail_id: 92,
          cosigner_id: 24
        },
        {
          bail_id: 35,
          cosigner_id: 24
        },
        {
          bail_id: 97,
          cosigner_id: 60
        },
        {
          bail_id: 72,
          cosigner_id: 73
        },
        {
          bail_id: 30,
          cosigner_id: 9
        },
        {
          bail_id: 24,
          cosigner_id: 52
        },
        {
          bail_id: 89,
          cosigner_id: 40
        },
        {
          bail_id: 48,
          cosigner_id: 59
        },
        {
          bail_id: 97,
          cosigner_id: 43
        },
        {
          bail_id: 48,
          cosigner_id: 71
        },
        {
          bail_id: 91,
          cosigner_id: 75
        },
        {
          bail_id: 74,
          cosigner_id: 16
        },
        {
          bail_id: 70,
          cosigner_id: 36
        },
        {
          bail_id: 72,
          cosigner_id: 8
        },
        {
          bail_id: 85,
          cosigner_id: 65
        },
        {
          bail_id: 67,
          cosigner_id: 63
        },
        {
          bail_id: 26,
          cosigner_id: 49
        },
        {
          bail_id: 75,
          cosigner_id: 11
        },
        {
          bail_id: 97,
          cosigner_id: 8
        },
        {
          bail_id: 66,
          cosigner_id: 28
        },
        {
          bail_id: 84,
          cosigner_id: 57
        },
        {
          bail_id: 45,
          cosigner_id: 18
        },
        {
          bail_id: 34,
          cosigner_id: 70
        },
        {
          bail_id: 31,
          cosigner_id: 40
        }
      ]);
    });
};
