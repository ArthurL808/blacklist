exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("addresses")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("addresses").insert([
        {
          street_number: "34",
          street_name: "Knutson",
          apt_number: "#825",
          city: "Knoxville",
          state: "Tennessee",
          country: "United States",
          zipcode: "37939",
          person_id: 1,
        },
        {
          street_number: "44",
          street_name: "Ridgeway",
          apt_number: "#394",
          city: "Saginaw",
          state: "Michigan",
          country: "United States",
          zipcode: "48609",
          person_id: 2,
        },
        {
          street_number: "155",
          street_name: "Columbus",
          apt_number: "#7e2",
          city: "San Francisco",
          state: "California",
          country: "United States",
          zipcode: "94137",
          person_id: 3,
        },
        {
          street_number: "330",
          street_name: "Bartillon",
          apt_number: "#30d",
          city: "Boynton Beach",
          state: "Florida",
          country: "United States",
          zipcode: "33436",
          person_id: 4,
        },
        {
          street_number: "8977",
          street_name: "Anthes",
          apt_number: "#147",
          city: "Indianapolis",
          state: "Indiana",
          country: "United States",
          zipcode: "46247",
          person_id: 5,
        },
        {
          street_number: "35456",
          street_name: "Golf View",
          apt_number: "#8a2",
          city: "Huntsville",
          state: "Alabama",
          country: "United States",
          zipcode: "35815",
          person_id: 6,
        },
        {
          street_number: "758",
          street_name: "East",
          apt_number: "#2fe",
          city: "Dayton",
          state: "Ohio",
          country: "United States",
          zipcode: "45432",
          person_id: 7,
        },
        {
          street_number: "7799",
          street_name: "Corben",
          apt_number: "#25a",
          city: "Mount Vernon",
          state: "New York",
          country: "United States",
          zipcode: "10557",
          person_id: 8,
        },
        {
          street_number: "25",
          street_name: "Sauthoff",
          apt_number: "#c8f",
          city: "Sacramento",
          state: "California",
          country: "United States",
          zipcode: "95894",
          person_id: 9,
        },
        {
          street_number: "2677",
          street_name: "Toban",
          apt_number: "#d98",
          city: "Mobile",
          state: "Alabama",
          country: "United States",
          zipcode: "36641",
          person_id: 10,
        },
      ]);
    });
};
