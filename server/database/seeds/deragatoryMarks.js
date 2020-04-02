exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("deragatoryMarks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("deragatoryMarks").insert([
        {
          reason_id: 3,
          bail_id: 8,
          onPerson: 10,
          user_id: 4,
          personRole: "defendant"
        },
        {
          reason_id: 1,
          bail_id: 12,
          onPerson: 10,
          user_id: 1,
          personRole: "cosigner"
        },
        {
          reason_id: 6,
          bail_id: 9,
          onPerson: 10,
          user_id: 3,
          personRole: "defendant"
        },
        {
          reason_id: 1,
          bail_id: 14,
          onPerson: 6,
          user_id: 1,
          personRole: "cosigner"
        },
        {
          reason_id: 3,
          bail_id: 14,
          onPerson: 2,
          user_id: 1,
          personRole: "defendant"
        },
        {
          reason_id: 8,
          bail_id: 15,
          onPerson: 7,
          user_id: 2,
          personRole: "defendant"
        },
        {
          reason_id: 1,
          bail_id: 11,
          onPerson: 1,
          user_id: 1,
          personRole: "defendant"
        },
        {
          reason_id: 2,
          bail_id: 10,
          onPerson: 4,
          user_id: 4,
          personRole: "cosigner"
        },
        {
          reason_id: 7,
          bail_id: 7,
          onPerson: 10,
          user_id: 5,
          personRole: "defendant"
        },
        {
          reason_id: 4,
          bail_id: 5,
          onPerson: 9,
          user_id: 2,
          personRole: "defendant"
        },
        {
          reason_id: 6,
          bail_id: 4,
          onPerson: 8,
          user_id: 3,
          personRole: "cosigner"
        },
        {
          reason_id: 3,
          bail_id: 8,
          onPerson: 10,
          user_id: 4,
          personRole: "defendant"
        },
        {
          reason_id: 1,
          bail_id: 13,
          onPerson: 8,
          user_id: 3,
          personRole: "defendant"
        },
        {
          reason_id: 7,
          bail_id: 2,
          onPerson: 2,
          user_id: 5,
          personRole: "defendant"
        },
        {
          reason_id: 5,
          bail_id: 2,
          onPerson: 2,
          user_id: 5,
          personRole: "defendant"
        },
        {
          reason_id: 6,
          bail_id: 3,
          onPerson: 5,
          user_id: 5,
          personRole: "defendant"
        },
        {
          reason_id: 3,
          bail_id: 6,
          onPerson: 3,
          user_id: 2,
          personRole: "defendant"
        },
        {
          reason_id: 1,
          bail_id: 10,
          onPerson: 4,
          user_id: 4,
          personRole: "cosigner"
        },
        {
          reason_id: 5,
          bail_id: 1,
          onPerson: 3,
          user_id: 4,
          personRole: "cosigner"
        },
        {
          reason_id: 7,
          bail_id: 13,
          onPerson: 8,
          user_id: 3,
          personRole: "defendant"
        }
      ]);
    });
};
