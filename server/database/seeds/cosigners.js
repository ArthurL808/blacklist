exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cosigners")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cosigners").insert([
        {
          first_name: "Olly",
          last_name: "Carrol",
          dob: "2014-09-06",
          gender_id: 1,
          bail_id: 27
        },
        {
          first_name: "Dru",
          last_name: "Ledster",
          dob: "1989-07-21",
          gender_id: 1,
          bail_id: 11
        },
        {
          first_name: "Cindy",
          last_name: "Jeannot",
          dob: "2017-11-22",
          gender_id: 1,
          bail_id: 32
        },
        {
          first_name: "Ernie",
          last_name: "Braidford",
          dob: "1996-04-24",
          gender_id: 1,
          bail_id: 18
        },
        {
          first_name: "Meg",
          last_name: "Braiden",
          dob: "2016-08-15",
          gender_id: 1,
          bail_id: 7
        },
        {
          first_name: "Rosalinde",
          last_name: "Meanwell",
          dob: "1997-12-05",
          gender_id: 3,
          bail_id: 26
        },
        {
          first_name: "Carson",
          last_name: "Gorcke",
          dob: "1981-01-04",
          gender_id: 1,
          bail_id: 13
        },
        {
          first_name: "Bay",
          last_name: "Banbrigge",
          dob: "1991-02-11",
          gender_id: 1,
          bail_id: 10
        },
        {
          first_name: "Goran",
          last_name: "Tibbles",
          dob: "1984-02-09",
          gender_id: 3,
          bail_id: 33
        },
        {
          first_name: "Irvin",
          last_name: "Hague",
          dob: "2014-02-23",
          gender_id: 1,
          bail_id: 25
        },
        {
          first_name: "Wendie",
          last_name: "Hubbucke",
          dob: "2008-05-25",
          gender_id: 3,
          bail_id: 19
        },
        {
          first_name: "Mozes",
          last_name: "Stapleford",
          dob: "1994-01-18",
          gender_id: 1,
          bail_id: 21
        },
        {
          first_name: "Madelina",
          last_name: "Stain",
          dob: "2014-02-19",
          gender_id: 3,
          bail_id: 4
        },
        {
          first_name: "Wilone",
          last_name: "Renfrew",
          dob: "2015-07-23",
          gender_id: 2,
          bail_id: 8
        },
        {
          first_name: "Andra",
          last_name: "Bedward",
          dob: "1989-07-28",
          gender_id: 3,
          bail_id: 6
        },
        {
          first_name: "Lee",
          last_name: "Daouse",
          dob: "2008-09-11",
          gender_id: 3,
          bail_id: 35
        },
        {
          first_name: "Sonnie",
          last_name: "Itzkovitch",
          dob: "1994-11-30",
          gender_id: 2,
          bail_id: 19
        },
        {
          first_name: "Bianka",
          last_name: "Tippell",
          dob: "2017-03-29",
          gender_id: 3,
          bail_id: 35
        },
        {
          first_name: "Jarrett",
          last_name: "Barchrameev",
          dob: "1991-05-23",
          gender_id: 2,
          bail_id: 12
        },
        {
          first_name: "Worth",
          last_name: "Parade",
          dob: "1990-03-20",
          gender_id: 1,
          bail_id: 26
        }
      ]);
    });
};
