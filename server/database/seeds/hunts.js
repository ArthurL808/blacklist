exports.seed = function (knex) {
  return knex("hunts")
    .del()
    .then(function () {
      return knex("hunts").insert([
        {
          active: true,
          person_id: 7,
          user_id: 1,
        },
        {
          active: true,
          person_id: 9,
          user_id: 5,
        },
        {
          active: true,
          person_id: 1,
          user_id: 3,
        },
        {
          active: true,
          person_id: 5,
          user_id: 2,
        },
        {
          active: true,
          person_id: 4,
          user_id: 4,
        },
        {
          active: false,
          person_id: 2,
          user_id: 4,
        },
      ]);
    });
};
