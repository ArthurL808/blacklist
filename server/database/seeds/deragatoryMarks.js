exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("deragatoryMarks")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("deragatoryMarks").insert([
        {
          reason_id: 3,
          on_person: 10,
          user_id: 4,
          person_role: "defendant",
        },
        {
          reason_id: 1,
          on_person: 10,
          user_id: 1,
          person_role: "cosigner",
        },
        {
          reason_id: 6,
          on_person: 10,
          user_id: 3,
          person_role: "defendant",
        },
        {
          reason_id: 1,
          on_person: 6,
          user_id: 1,
          person_role: "cosigner",
        },
        {
          reason_id: 3,
          on_person: 2,
          user_id: 1,
          person_role: "defendant",
        },
        {
          reason_id: 8,
          on_person: 7,
          user_id: 2,
          person_role: "defendant",
        },
        {
          reason_id: 1,
          on_person: 1,
          user_id: 1,
          person_role: "defendant",
        },
        {
          reason_id: 2,
          on_person: 4,
          user_id: 4,
          person_role: "cosigner",
        },
        {
          reason_id: 7,
          on_person: 10,
          user_id: 5,
          person_role: "defendant",
        },
        {
          reason_id: 4,
          on_person: 9,
          user_id: 2,
          person_role: "defendant",
        },
        {
          reason_id: 6,
          on_person: 8,
          user_id: 3,
          person_role: "cosigner",
        },
        {
          reason_id: 3,
          on_person: 10,
          user_id: 4,
          person_role: "defendant",
        },
        {
          reason_id: 1,
          on_person: 8,
          user_id: 3,
          person_role: "defendant",
        },
        {
          reason_id: 7,
          on_person: 2,
          user_id: 5,
          person_role: "defendant",
        },
        {
          reason_id: 5,
          on_person: 2,
          user_id: 5,
          person_role: "defendant",
        },
        {
          reason_id: 6,
          on_person: 5,
          user_id: 5,
          person_role: "defendant",
        },
        {
          reason_id: 3,
          on_person: 3,
          user_id: 2,
          person_role: "defendant",
        },
        {
          reason_id: 1,
          on_person: 4,
          user_id: 4,
          person_role: "cosigner",
        },
        {
          reason_id: 5,
          on_person: 3,
          user_id: 4,
          person_role: "cosigner",
        },
        {
          reason_id: 7,
          on_person: 8,
          user_id: 3,
          person_role: "defendant",
        },
      ]);
    });
};
