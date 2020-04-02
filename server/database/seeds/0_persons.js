exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("persons")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("persons").insert([
        {
          first_name: "Frederico",
          last_name: "Heindrich",
          address: "84 Park Meadow Court",
          dob: "2016-03-14",
          gender_id: 1,
          mental_health_issues: false,
          drug_user: false
        },
        {
          first_name: "Ina",
          last_name: "Letterese",
          address: "59488 Menomonie Crossing",
          dob: "2013-09-11",
          gender_id: 3,
          mental_health_issues: true,
          drug_user: true
        },
        {
          first_name: "Marena",
          last_name: "Hyndman",
          address: "8 Helena Junction",
          dob: "1993-01-09",
          gender_id: 1,
          mental_health_issues: true,
          drug_user: false
        },
        {
          first_name: "Leora",
          last_name: "Tiffin",
          address: "66621 Bluestem Way",
          dob: "2004-05-07",
          gender_id: 3,
          mental_health_issues: true,
          drug_user: true
        },
        {
          first_name: "Portia",
          last_name: "Layzell",
          address: "5910 Maple Avenue",
          dob: "1994-02-24",
          gender_id: 1,
          mental_health_issues: false,
          drug_user: true
        },
        {
          first_name: "Ker",
          last_name: "Bollam",
          address: "40012 Nobel Lane",
          dob: "1999-07-11",
          gender_id: 1,
          mental_health_issues: true,
          drug_user: false
        },
        {
          first_name: "Bondie",
          last_name: "Benoist",
          address: "90749 Melvin Pass",
          dob: "2019-02-17",
          gender_id: 3,
          mental_health_issues: true,
          drug_user: false
        },
        {
          first_name: "Ezechiel",
          last_name: "Yukhov",
          address: "613 Sullivan Way",
          dob: "1992-05-14",
          gender_id: 3,
          mental_health_issues: false,
          drug_user: false
        },
        {
          first_name: "Melba",
          last_name: "Leber",
          address: "5 Sutteridge Lane",
          dob: "2017-10-18",
          gender_id: 3,
          mental_health_issues: false,
          drug_user: false
        },
        {
          first_name: "Peterus",
          last_name: "Duddell",
          address: "6 John Wall Junction",
          dob: "1987-12-28",
          gender_id: 1,
          mental_health_issues: false,
          drug_user: false
        }
      ]);
    });
};
