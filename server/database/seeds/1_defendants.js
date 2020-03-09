exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("defendants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("defendants").insert([
        {
          first_name: "Wilfrid",
          last_name: "Arnley",
          dob: "2006-12-23",
          gender_id: 2
        },
        {
          first_name: "Debee",
          last_name: "Blasli",
          dob: "2008-03-08",
          gender_id: 1
        },
        {
          first_name: "Jaye",
          last_name: "Macbeth",
          dob: "2017-07-04",
          gender_id: 1
        },
        {
          first_name: "Lucian",
          last_name: "Broodes",
          dob: "1981-04-30",
          gender_id: 1
        },
        {
          first_name: "Verine",
          last_name: "Curnnok",
          dob: "1986-03-15",
          gender_id: 1
        },
        {
          first_name: "Darbee",
          last_name: "Sprigings",
          dob: "1996-05-23",
          gender_id: 2
        },
        {
          first_name: "Nickie",
          last_name: "Bateup",
          dob: "2009-03-13",
          gender_id: 2
        },
        {
          first_name: "Delila",
          last_name: "Burdoun",
          dob: "2014-10-09",
          gender_id: 1
        },
        {
          first_name: "Judy",
          last_name: "Tainton",
          dob: "2007-05-22",
          gender_id: 2
        },
        {
          first_name: "Ambrosio",
          last_name: "Ferdinand",
          dob: "2009-01-07",
          gender_id: 2
        },
        {
          first_name: "Veronike",
          last_name: "Sellman",
          dob: "1994-08-09",
          gender_id: 3
        },
        {
          first_name: "Lynnet",
          last_name: "Dransfield",
          dob: "1991-08-26",
          gender_id: 3
        },
        {
          first_name: "Onida",
          last_name: "Waadenburg",
          dob: "1980-11-26",
          gender_id: 3
        },
        {
          first_name: "Carley",
          last_name: "Kastel",
          dob: "1994-03-24",
          gender_id: 2
        },
        {
          first_name: "Chickie",
          last_name: "Jellings",
          dob: "1993-08-26",
          gender_id: 3
        },
        {
          first_name: "Ross",
          last_name: "Kenna",
          dob: "2017-08-20",
          gender_id: 3
        },
        {
          first_name: "Lorant",
          last_name: "Gorrick",
          dob: "2005-03-04",
          gender_id: 2
        },
        {
          first_name: "Talbert",
          last_name: "Oldham",
          dob: "2016-08-17",
          gender_id: 3
        },
        {
          first_name: "Hiram",
          last_name: "Wormleighton",
          dob: "2014-06-09",
          gender_id: 1
        },
        {
          first_name: "Jewelle",
          last_name: "Goodlip",
          dob: "2010-02-08",
          gender_id: 1
        },
        {
          first_name: "Binni",
          last_name: "Pikhno",
          dob: "1986-01-30",
          gender_id: 2
        },
        {
          first_name: "Jessalyn",
          last_name: "Bakhrushkin",
          dob: "2019-02-21",
          gender_id: 1
        },
        {
          first_name: "Arch",
          last_name: "Kidston",
          dob: "1994-03-24",
          gender_id: 1
        },
        {
          first_name: "Greta",
          last_name: "Dayley",
          dob: "2014-05-21",
          gender_id: 3
        },
        {
          first_name: "Torey",
          last_name: "Chant",
          dob: "2019-11-05",
          gender_id: 1
        }
      ]);
    });
};
