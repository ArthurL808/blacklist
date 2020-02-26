exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("defendants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("defendants").insert([
        {
          first_name: "Aurore",
          last_name: "Bohler",
          gender: "Female",
          address: "34 Fuller Park",
          dob: "2014-12-20"
        },
        {
          first_name: "Broderic",
          last_name: "Segeswoeth",
          gender: "Male",
          address: "7184 Eagan Trail",
          dob: "2008-12-01"
        },
        {
          first_name: "Alistair",
          last_name: "Fortnon",
          gender: "Male",
          address: "47 Bashford Circle",
          dob: "1993-11-03"
        },
        {
          first_name: "Gifford",
          last_name: "Leighfield",
          gender: "Male",
          address: "557 Sherman Point",
          dob: "2002-09-22"
        },
        {
          first_name: "Pammy",
          last_name: "Tineman",
          gender: "Female",
          address: "4 Arrowood Drive",
          dob: "2011-08-20"
        },
        {
          first_name: "Maryjane",
          last_name: "Conklin",
          gender: "Female",
          address: "2229 Carpenter Road",
          dob: "1984-05-12"
        },
        {
          first_name: "Arlen",
          last_name: "Eilhertsen",
          gender: "Female",
          address: "99538 Fieldstone Place",
          dob: "1982-11-15"
        },
        {
          first_name: "Judy",
          last_name: "Woolland",
          gender: "Female",
          address: "73 Tony Alley",
          dob: "2015-04-18"
        },
        {
          first_name: "Dido",
          last_name: "Sargison",
          gender: "Female",
          address: "033 South Place",
          dob: "1997-10-24"
        },
        {
          first_name: "Jacinthe",
          last_name: "Stork",
          gender: "Female",
          address: "8568 Elka Park",
          dob: "2018-08-12"
        }
      ]);
    });
};
