exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("coSigners")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("coSigners").insert([
        {
          first_name: "Jaquenetta",
          last_name: "Vogeler",
          dob: "1994-02-22",
          gender_id: 2
        },
        {
          first_name: "Emmet",
          last_name: "Aireton",
          dob: "2013-12-22",
          gender_id: 3
        },
        {
          first_name: "Brunhilda",
          last_name: "Padly",
          dob: "2002-10-08",
          gender_id: 3
        },
        {
          first_name: "Bayard",
          last_name: "Beininck",
          dob: "2000-03-18",
          gender_id: 1
        },
        {
          first_name: "Alexis",
          last_name: "Jefferd",
          dob: "2017-08-27",
          gender_id: 1
        },
        {
          first_name: "Bernete",
          last_name: "Buff",
          dob: "1995-09-17",
          gender_id: 3
        },
        {
          first_name: "Lew",
          last_name: "Keddie",
          dob: "1996-01-29",
          gender_id: 1
        },
        {
          first_name: "Dewie",
          last_name: "Bukac",
          dob: "2009-02-19",
          gender_id: 1
        },
        {
          first_name: "Benjamin",
          last_name: "Deathridge",
          dob: "1980-09-03",
          gender_id: 1
        },
        {
          first_name: "Eugen",
          last_name: "Crohan",
          dob: "1997-11-06",
          gender_id: 3
        }
      ]);
    });
};
