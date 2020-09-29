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
          image_url:'https://bailbonds-blacklist.s3-us-west-2.amazonaws.com/Portrait_Placeholder.png',
          dob: "2016-03-14",
          gender_id: 1,
          weight: 150,
          height: 200
        },
        {
          first_name: "Ina",
          last_name: "Letterese",
          image_url:'https://bailbonds-blacklist.s3-us-west-2.amazonaws.com/Portrait_Placeholder.png',
          dob: "2013-09-11",
          gender_id: 3,
          weight: 150,
          height: 200
        },
        {
          first_name: "Marena",
          last_name: "Hyndman",
          image_url:'https://bailbonds-blacklist.s3-us-west-2.amazonaws.com/Portrait_Placeholder.png',
          dob: "1993-01-09",
          gender_id: 1,
          weight: 150,
          height: 200
        },
        {
          first_name: "Leora",
          last_name: "Tiffin",
          image_url:'https://bailbonds-blacklist.s3-us-west-2.amazonaws.com/Portrait_Placeholder.png',
          dob: "2004-05-07",
          gender_id: 3,
          weight: 150,
          height: 200
        },
        {
          first_name: "Portia",
          last_name: "Layzell",
          image_url:'https://bailbonds-blacklist.s3-us-west-2.amazonaws.com/Portrait_Placeholder.png',
          dob: "1994-02-24",
          gender_id: 1,
          weight: 150,
          height: 200
        },
        {
          first_name: "Fer",
          last_name: "Bollam",
          image_url:'https://bailbonds-blacklist.s3-us-west-2.amazonaws.com/Portrait_Placeholder.png',
          dob: "1999-07-11",
          gender_id: 1,
          weight: 150,
          height: 200
        },
        {
          first_name: "Bondie",
          last_name: "Benoist",
          image_url:'https://bailbonds-blacklist.s3-us-west-2.amazonaws.com/Portrait_Placeholder.png',
          dob: "2019-02-17",
          gender_id: 3,
          weight: 150,
          height: 200
        },
        {
          first_name: "Ezechiel",
          last_name: "Yukhov",
          image_url:'https://bailbonds-blacklist.s3-us-west-2.amazonaws.com/Portrait_Placeholder.png',
          dob: "1992-05-14",
          gender_id: 3,
          weight: 150,
          height: 200
        },
        {
          first_name: "Melba",
          last_name: "Leber",
          image_url:'https://bailbonds-blacklist.s3-us-west-2.amazonaws.com/Portrait_Placeholder.png',
          dob: "2017-10-18",
          gender_id: 3,
          weight: 150,
          height: 200
        },
        {
          first_name: "Peterus",
          last_name: "Duddell",
          image_url:'https://bailbonds-blacklist.s3-us-west-2.amazonaws.com/Portrait_Placeholder.png',
          dob: "1987-12-28",
          gender_id: 1,
          weight: 150,
          height: 200
        }
      ]);
    });
};
