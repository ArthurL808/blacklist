exports.seed = function (knex) {
  return knex("hunts")
    .del()
    .then(function () {
      return knex("hunts").insert([
        {
          active: true,
          person_id: 7,
          user_id: 1,
          known_to_carry_weapon: true,
          charged_with_violent_crime:true
        },
        {
          active: true,
          person_id: 9,
          user_id: 5,
          known_to_carry_weapon: false,
          charged_with_violent_crime:true
        },
        {
          active: true,
          person_id: 1,
          user_id: 3,
          known_to_carry_weapon: false,
          charged_with_violent_crime:false
        },
        {
          active: true,
          person_id: 5,
          user_id: 2,
          known_to_carry_weapon: true,
          charged_with_violent_crime:false
        },
        {
          active: true,
          person_id: 4,
          user_id: 4,
          known_to_carry_weapon: true,
          charged_with_violent_crime:true
        },
        {
          active: false,
          person_id: 2,
          user_id: 4,
          known_to_carry_weapon: true,
          charged_with_violent_crime:false
        },
      ]);
    });
};
