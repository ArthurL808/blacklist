exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("defendants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("defendants").insert([
        {
          first_name: "Arden",
          last_name: "Auty",
          address: "91 Basil Terrace",
          dob: "2001-10-24",
          gender_id: 1
        },
        {
          first_name: "Kaleena",
          last_name: "Byrd",
          address: "6 Caliangt Trail",
          dob: "2013-05-24",
          gender_id: 1
        },
        {
          first_name: "Gottfried",
          last_name: "Severy",
          address: "16569 Dakota Junction",
          dob: "1993-08-24",
          gender_id: 3
        },
        {
          first_name: "Roland",
          last_name: "Eich",
          address: "312 Texas Circle",
          dob: "2018-08-09",
          gender_id: 2
        },
        {
          first_name: "Leslie",
          last_name: "Tollett",
          address: "34 Burrows Plaza",
          dob: "1985-10-25",
          gender_id: 1
        },
        {
          first_name: "Alyosha",
          last_name: "Krystof",
          address: "3 Del Sol Road",
          dob: "1987-04-12",
          gender_id: 2
        },
        {
          first_name: "Jasen",
          last_name: "Dewfall",
          address: "0154 Saint Paul Trail",
          dob: "1987-09-11",
          gender_id: 2
        },
        {
          first_name: "Elvira",
          last_name: "Culy",
          address: "05031 Sherman Court",
          dob: "1995-09-25",
          gender_id: 1
        },
        {
          first_name: "Roxy",
          last_name: "Bispham",
          address: "7464 2nd Alley",
          dob: "1986-05-24",
          gender_id: 1
        },
        {
          first_name: "Xavier",
          last_name: "Eagland",
          address: "305 Mayfield Lane",
          dob: "2005-09-28",
          gender_id: 1
        },
        {
          first_name: "Alic",
          last_name: "Kayzer",
          address: "6256 Jay Parkway",
          dob: "1996-04-13",
          gender_id: 1
        },
        {
          first_name: "Francesca",
          last_name: "Yanyshev",
          address: "6136 Derek Lane",
          dob: "1987-12-19",
          gender_id: 2
        },
        {
          first_name: "Skelly",
          last_name: "Muris",
          address: "78 Vernon Lane",
          dob: "2015-02-11",
          gender_id: 2
        },
        {
          first_name: "Renell",
          last_name: "Rawkesby",
          address: "7801 Dovetail Hill",
          dob: "1986-03-11",
          gender_id: 2
        },
        {
          first_name: "Britteny",
          last_name: "Braniff",
          address: "70400 Rusk Avenue",
          dob: "2020-02-01",
          gender_id: 3
        },
        {
          first_name: "Angelica",
          last_name: "Jarlmann",
          address: "7148 Reinke Point",
          dob: "1994-04-27",
          gender_id: 1
        },
        {
          first_name: "Rafael",
          last_name: "Gosden",
          address: "6640 Southridge Circle",
          dob: "1994-01-14",
          gender_id: 1
        },
        {
          first_name: "Amble",
          last_name: "Akam",
          address: "732 Barnett Place",
          dob: "2015-03-25",
          gender_id: 2
        },
        {
          first_name: "Dorthea",
          last_name: "Ickovici",
          address: "3 Fremont Trail",
          dob: "1995-03-23",
          gender_id: 3
        },
        {
          first_name: "Archibald",
          last_name: "Obee",
          address: "624 Orin Place",
          dob: "1980-12-18",
          gender_id: 1
        }
      ]);
    });
};
