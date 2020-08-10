exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("deragatoryMarks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("deragatoryMarks").insert([
        {
          reason_id: 3,
          onPerson: 10,
          user_id: 4,
          personRole: "defendant",
        },
        {
          reason_id: 1,
          onPerson: 10,
          user_id: 1,
          personRole: "cosigner",
        },
        {
          reason_id: 6,
          onPerson: 10,
          user_id: 3,
          personRole: "defendant",
        },
        {
          reason_id: 1,
          onPerson: 6,
          user_id: 1,
          personRole: "cosigner",
        },
        {
          reason_id: 3,
          onPerson: 2,
          user_id: 1,
          personRole: "defendant",
        },
        {
          reason_id: 8,
          onPerson: 7,
          user_id: 2,
          personRole: "defendant",
        },
        {
          reason_id: 1,
          onPerson: 1,
          user_id: 1,
          personRole: "defendant",
        },
        {
          reason_id: 2,
          onPerson: 4,
          user_id: 4,
          personRole: "cosigner",
        },
        {
          reason_id: 7,
          onPerson: 10,
          user_id: 5,
          personRole: "defendant",
        },
        {
          reason_id: 4,
          onPerson: 9,
          user_id: 2,
          personRole: "defendant",
        },
        {
          reason_id: 6,
          onPerson: 8,
          user_id: 3,
          personRole: "cosigner",
        },
        {
          reason_id: 3,
          onPerson: 10,
          user_id: 4,
          personRole: "defendant",
        },
        {
          reason_id: 1,
          onPerson: 8,
          user_id: 3,
          personRole: "defendant",
        },
        {
          reason_id: 7,
          onPerson: 2,
          user_id: 5,
          personRole: "defendant",
        },
        {
          reason_id: 5,
          onPerson: 2,
          user_id: 5,
          personRole: "defendant",
        },
        {
          reason_id: 6,
          onPerson: 5,
          user_id: 5,
          personRole: "defendant",
        },
        {
          reason_id: 3,
          onPerson: 3,
          user_id: 2,
          personRole: "defendant",
        },
        {
          reason_id: 1,
          onPerson: 4,
          user_id: 4,
          personRole: "cosigner",
        },
        {
          reason_id: 5,
          onPerson: 3,
          user_id: 4,
          personRole: "cosigner",
        },
        {
          reason_id: 7,
          onPerson: 8,
          user_id: 3,
          personRole: "defendant",
        },
      ]);
    });
};
