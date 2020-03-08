exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("bails_reasons")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("bails_reasons").insert([
        {
          reason_id: 4,
          bail_id: 33
        },
        {
          reason_id: 6,
          bail_id: 20
        },
        {
          reason_id: 3,
          bail_id: 8
        },
        {
          reason_id: 4,
          bail_id: 32
        },
        {
          reason_id: 5,
          bail_id: 20
        },
        {
          reason_id: 4,
          bail_id: 22
        },
        {
          reason_id: 1,
          bail_id: 7
        },
        {
          reason_id: 1,
          bail_id: 30
        },
        {
          reason_id: 5,
          bail_id: 5
        },
        {
          reason_id: 8,
          bail_id: 12
        },
        {
          reason_id: 6,
          bail_id: 29
        },
        {
          reason_id: 4,
          bail_id: 7
        },
        {
          reason_id: 2,
          bail_id: 17
        },
        {
          reason_id: 2,
          bail_id: 34
        },
        {
          reason_id: 6,
          bail_id: 20
        },
        {
          reason_id: 4,
          bail_id: 34
        },
        {
          reason_id: 3,
          bail_id: 30
        },
        {
          reason_id: 1,
          bail_id: 6
        },
        {
          reason_id: 4,
          bail_id: 28
        },
        {
          reason_id: 8,
          bail_id: 9
        },
        {
          reason_id: 6,
          bail_id: 31
        },
        {
          reason_id: 5,
          bail_id: 27
        },
        {
          reason_id: 3,
          bail_id: 1
        },
        {
          reason_id: 8,
          bail_id: 27
        },
        {
          reason_id: 1,
          bail_id: 8
        },
        {
          reason_id: 3,
          bail_id: 7
        },
        {
          reason_id: 1,
          bail_id: 21
        },
        {
          reason_id: 3,
          bail_id: 2
        },
        {
          reason_id: 4,
          bail_id: 10
        },
        {
          reason_id: 8,
          bail_id: 30
        },
        {
          reason_id: 1,
          bail_id: 11
        },
        {
          reason_id: 1,
          bail_id: 20
        },
        {
          reason_id: 1,
          bail_id: 17
        },
        {
          reason_id: 5,
          bail_id: 10
        },
        {
          reason_id: 5,
          bail_id: 9
        },
        {
          reason_id: 1,
          bail_id: 15
        },
        {
          reason_id: 3,
          bail_id: 34
        },
        {
          reason_id: 2,
          bail_id: 10
        },
        {
          reason_id: 2,
          bail_id: 18
        },
        {
          reason_id: 8,
          bail_id: 18
        },
        {
          reason_id: 1,
          bail_id: 31
        },
        {
          reason_id: 3,
          bail_id: 27
        },
        {
          reason_id: 8,
          bail_id: 11
        },
        {
          reason_id: 5,
          bail_id: 8
        },
        {
          reason_id: 3,
          bail_id: 13
        },
        {
          reason_id: 3,
          bail_id: 7
        },
        {
          reason_id: 6,
          bail_id: 15
        },
        {
          reason_id: 7,
          bail_id: 12
        },
        {
          reason_id: 8,
          bail_id: 33
        },
        {
          reason_id: 7,
          bail_id: 33
        }
      ]);
    });
};
