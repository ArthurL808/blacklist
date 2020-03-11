exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("defendants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("defendants").insert([
        {
          first_name: "Mari",
          last_name: "Larder",
          gender_id: 3,
          address: "8 Crowley Avenue",
          dob: "1987-07-30"
        },
        {
          first_name: "Jonathon",
          last_name: "McTeggart",
          gender_id: 3,
          address: "59495 Sheridan Parkway",
          dob: "1991-01-07"
        },
        {
          first_name: "Nikita",
          last_name: "Tremble",
          gender_id: 3,
          address: "336 Eagle Crest Avenue",
          dob: "1984-07-04"
        },
        {
          first_name: "Lawrence",
          last_name: "Van Cassel",
          gender_id: 3,
          address: "4584 Lyons Alley",
          dob: "1982-08-05"
        },
        {
          first_name: "Aryn",
          last_name: "Sollitt",
          gender_id: 3,
          address: "66170 Surrey Way",
          dob: "1997-04-18"
        },
        {
          first_name: "Ruthe",
          last_name: "Bottrill",
          gender_id: 2,
          address: "68762 5th Trail",
          dob: "1989-01-13"
        },
        {
          first_name: "Dolores",
          last_name: "Kingstne",
          gender_id: 1,
          address: "38 Bobwhite Trail",
          dob: "1989-10-06"
        },
        {
          first_name: "Carol-jean",
          last_name: "Long",
          gender_id: 2,
          address: "20698 Ridgeview Crossing",
          dob: "1994-08-03"
        },
        {
          first_name: "Rey",
          last_name: "Border",
          gender_id: 2,
          address: "6 6th Center",
          dob: "1984-11-16"
        },
        {
          first_name: "Claudelle",
          last_name: "Farmiloe",
          gender_id: 1,
          address: "7061 Chinook Place",
          dob: "1998-10-19"
        },
        {
          first_name: "Shay",
          last_name: "Friar",
          gender_id: 1,
          address: "071 Amoth Lane",
          dob: "1991-08-19"
        },
        {
          first_name: "Rivkah",
          last_name: "Berard",
          gender_id: 2,
          address: "9 Dayton Place",
          dob: "1984-09-24"
        },
        {
          first_name: "Rey",
          last_name: "Marquess",
          gender_id: 2,
          address: "21 Kim Court",
          dob: "1990-12-30"
        },
        {
          first_name: "Alissa",
          last_name: "Chmiel",
          gender_id: 2,
          address: "9 American Ash Drive",
          dob: "1998-12-07"
        },
        {
          first_name: "Arlina",
          last_name: "Morrell",
          gender_id: 2,
          address: "2 Harper Way",
          dob: "1990-06-24"
        },
        {
          first_name: "Jo-ann",
          last_name: "Clout",
          gender_id: 2,
          address: "07 Melby Circle",
          dob: "1984-03-20"
        },
        {
          first_name: "Roxanne",
          last_name: "Keays",
          gender_id: 3,
          address: "98 Heath Alley",
          dob: "1993-11-25"
        },
        {
          first_name: "Justis",
          last_name: "Hankin",
          gender_id: 3,
          address: "36802 Bartillon Hill",
          dob: "1995-03-24"
        },
        {
          first_name: "Booth",
          last_name: "Berr",
          gender_id: 3,
          address: "654 Sunfield Crossing",
          dob: "1986-01-16"
        },
        {
          first_name: "Humphrey",
          last_name: "Rojahn",
          gender_id: 1,
          address: "492 Lakeland Road",
          dob: "1993-12-08"
        },
        {
          first_name: "Anet",
          last_name: "Calton",
          gender_id: 1,
          address: "3 Meadow Vale Street",
          dob: "1982-11-04"
        },
        {
          first_name: "Cletis",
          last_name: "McGlynn",
          gender_id: 1,
          address: "951 Graceland Terrace",
          dob: "1999-03-28"
        },
        {
          first_name: "Brenn",
          last_name: "Pitway",
          gender_id: 3,
          address: "12971 Meadow Valley Parkway",
          dob: "1994-03-31"
        },
        {
          first_name: "Ciel",
          last_name: "Nowakowski",
          gender_id: 1,
          address: "274 Ilene Avenue",
          dob: "1984-04-08"
        },
        {
          first_name: "Roi",
          last_name: "Welden",
          gender_id: 1,
          address: "0416 Michigan Avenue",
          dob: "1988-06-24"
        }
      ]);
    });
};
