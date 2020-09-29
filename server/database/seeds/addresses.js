exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("addresses")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("addresses").insert([
        {
          street_address: "5033 Riverside Circle",
          zipcode: "3014",
          apt_number: "#17b",
          person_id: 6,
        },
        {
          street_address: "3 Mosinee Alley",
          zipcode: "3",
          apt_number: "#291",
          person_id: 9,
        },
        {
          street_address: "131 Eastwood Alley",
          zipcode: "66668",
          apt_number: "#3d7",
          person_id: 6,
        },
        {
          street_address: "7358 Welch Park",
          zipcode: "683",
          apt_number: "#edb",
          person_id: 10,
        },
        {
          street_address: "36 Granby Avenue",
          zipcode: "6448",
          apt_number: "#021",
          person_id: 6,
        },
        {
          street_address: "41 Randy Street",
          zipcode: "5",
          apt_number: "#3be",
          person_id: 3,
        },
        {
          street_address: "2611 Mesta Hill",
          zipcode: "6",
          apt_number: "#b33",
          person_id: 9,
        },
        {
          street_address: "32604 Steensland Point",
          zipcode: "423",
          apt_number: "#c67",
          person_id: 2,
        },
        {
          street_address: "53849 Oakridge Circle",
          zipcode: "8",
          apt_number: "#3e2",
          person_id: 3,
        },
        {
          street_address: "35721 Corry Center",
          zipcode: "3822",
          apt_number: "#9f2",
          person_id: 10,
        },
        {
          street_address: "06851 Gulseth Place",
          zipcode: "295",
          apt_number: "#41e",
          person_id: 7,
        },
        {
          street_address: "4341 Boyd Crossing",
          zipcode: "26292",
          apt_number: "#c86",
          person_id: 7,
        },
      ]);
    });
};
