exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cosigners")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cosigners").insert([
        {
          first_name: "Kinna",
          last_name: "Jurczik",
          gender_id: 3,
          dob: "1990-05-14"
        },
        {
          first_name: "Julina",
          last_name: "Francie",
          gender_id: 1,
          dob: "2008-09-24"
        },
        {
          first_name: "Joshia",
          last_name: "Bricksey",
          gender_id: 2,
          dob: "1984-09-28"
        },
        {
          first_name: "Adriane",
          last_name: "Wisher",
          gender_id: 1,
          dob: "1998-12-20"
        },
        {
          first_name: "Tiebout",
          last_name: "Caghan",
          gender_id: 1,
          dob: "2011-06-26"
        },
        {
          first_name: "Marius",
          last_name: "Shilstone",
          gender_id: 1,
          dob: "1990-12-06"
        },
        {
          first_name: "Valene",
          last_name: "McIndoe",
          gender_id: 1,
          dob: "1982-02-22"
        },
        {
          first_name: "Augusta",
          last_name: "Dunthorn",
          gender_id: 3,
          dob: "2001-05-25"
        },
        {
          first_name: "Celisse",
          last_name: "Willstrop",
          gender_id: 3,
          dob: "1983-06-25"
        },
        {
          first_name: "Clovis",
          last_name: "Lorimer",
          gender_id: 1,
          dob: "1995-09-29"
        },
        {
          first_name: "Maritsa",
          last_name: "Licciardello",
          gender_id: 2,
          dob: "2010-01-25"
        },
        {
          first_name: "Townie",
          last_name: "Bingle",
          gender_id: 1,
          dob: "2014-09-13"
        },
        {
          first_name: "Britni",
          last_name: "Golby",
          gender_id: 2,
          dob: "1994-04-04"
        },
        {
          first_name: "Gwenette",
          last_name: "Flay",
          gender_id: 3,
          dob: "2005-08-16"
        },
        {
          first_name: "Cassey",
          last_name: "Waltering",
          gender_id: 1,
          dob: "1998-06-27"
        },
        {
          first_name: "Tonie",
          last_name: "Bather",
          gender_id: 1,
          dob: "1981-08-12"
        },
        {
          first_name: "Flore",
          last_name: "Sames",
          gender_id: 2,
          dob: "2018-08-11"
        },
        {
          first_name: "Jarad",
          last_name: "Spinozzi",
          gender_id: 2,
          dob: "2000-06-03"
        },
        {
          first_name: "Tremain",
          last_name: "Mapam",
          gender_id: 3,
          dob: "1980-05-22"
        },
        {
          first_name: "Mersey",
          last_name: "Emanuele",
          gender_id: 2,
          dob: "1984-07-01"
        },
        {
          first_name: "Nert",
          last_name: "Sawrey",
          gender_id: 2,
          dob: "1983-05-18"
        },
        {
          first_name: "Angelica",
          last_name: "Goff",
          gender_id: 2,
          dob: "1991-12-25"
        },
        {
          first_name: "Jemmy",
          last_name: "Shakle",
          gender_id: 1,
          dob: "1985-10-17"
        },
        {
          first_name: "Amy",
          last_name: "Comber",
          gender_id: 1,
          dob: "2005-12-06"
        },
        {
          first_name: "Theodore",
          last_name: "Mounce",
          gender_id: 3,
          dob: "2017-08-14"
        },
        {
          first_name: "Hamilton",
          last_name: "Causley",
          gender_id: 3,
          dob: "1993-03-09"
        },
        {
          first_name: "Cate",
          last_name: "Tidswell",
          gender_id: 1,
          dob: "1997-03-06"
        },
        {
          first_name: "Andie",
          last_name: "Pepperd",
          gender_id: 3,
          dob: "1988-06-04"
        },
        {
          first_name: "Drusi",
          last_name: "Fishburn",
          gender_id: 2,
          dob: "2014-10-14"
        },
        {
          first_name: "Cassaundra",
          last_name: "Walczynski",
          gender_id: 2,
          dob: "1990-10-15"
        },
        {
          first_name: "Gan",
          last_name: "Savine",
          gender_id: 2,
          dob: "1999-05-26"
        },
        {
          first_name: "Winn",
          last_name: "Varsey",
          gender_id: 3,
          dob: "2015-02-20"
        },
        {
          first_name: "Jamesy",
          last_name: "Deesly",
          gender_id: 1,
          dob: "2002-11-24"
        },
        {
          first_name: "Elmore",
          last_name: "Bredgeland",
          gender_id: 2,
          dob: "2004-11-07"
        },
        {
          first_name: "Siegfried",
          last_name: "Quarrell",
          gender_id: 3,
          dob: "1984-06-14"
        },
        {
          first_name: "Hildegarde",
          last_name: "Fenby",
          gender_id: 3,
          dob: "2000-03-10"
        },
        {
          first_name: "Ronny",
          last_name: "McCraw",
          gender_id: 3,
          dob: "1985-02-23"
        },
        {
          first_name: "Amii",
          last_name: "Edrich",
          gender_id: 2,
          dob: "1980-05-12"
        },
        {
          first_name: "Karlotta",
          last_name: "Larrett",
          gender_id: 1,
          dob: "1981-12-27"
        },
        {
          first_name: "Elysia",
          last_name: "Emerine",
          gender_id: 1,
          dob: "1988-07-19"
        },
        {
          first_name: "Shayne",
          last_name: "Pellant",
          gender_id: 1,
          dob: "2005-04-17"
        },
        {
          first_name: "Laurice",
          last_name: "Leachman",
          gender_id: 1,
          dob: "1991-06-21"
        },
        {
          first_name: "Mahmoud",
          last_name: "Bradnocke",
          gender_id: 3,
          dob: "2012-04-09"
        },
        {
          first_name: "Chadd",
          last_name: "Yedall",
          gender_id: 2,
          dob: "2014-08-01"
        },
        {
          first_name: "Benjie",
          last_name: "Dreschler",
          gender_id: 3,
          dob: "1996-01-17"
        },
        {
          first_name: "Katine",
          last_name: "Ikins",
          gender_id: 2,
          dob: "1980-07-01"
        },
        {
          first_name: "Teddy",
          last_name: "Sottell",
          gender_id: 1,
          dob: "2013-11-10"
        },
        {
          first_name: "Keeley",
          last_name: "Youings",
          gender_id: 1,
          dob: "1991-07-22"
        },
        {
          first_name: "Rose",
          last_name: "Rump",
          gender_id: 3,
          dob: "2002-10-15"
        },
        {
          first_name: "Taite",
          last_name: "Allman",
          gender_id: 2,
          dob: "2011-01-15"
        },
        {
          first_name: "Kristofor",
          last_name: "Featherby",
          gender_id: 2,
          dob: "1980-10-12"
        },
        {
          first_name: "Ricca",
          last_name: "Monkeman",
          gender_id: 1,
          dob: "1990-05-17"
        },
        {
          first_name: "Portie",
          last_name: "Cleveley",
          gender_id: 1,
          dob: "2008-06-09"
        },
        {
          first_name: "Valaria",
          last_name: "Ellcock",
          gender_id: 3,
          dob: "1993-07-05"
        },
        {
          first_name: "Valaria",
          last_name: "Dundon",
          gender_id: 3,
          dob: "1993-04-23"
        },
        {
          first_name: "Bogart",
          last_name: "Kos",
          gender_id: 1,
          dob: "2000-04-22"
        },
        {
          first_name: "Auberon",
          last_name: "Larner",
          gender_id: 1,
          dob: "2003-01-02"
        },
        {
          first_name: "Shannan",
          last_name: "Lumb",
          gender_id: 2,
          dob: "1984-07-17"
        },
        {
          first_name: "Corney",
          last_name: "Whitcomb",
          gender_id: 2,
          dob: "2004-01-13"
        },
        {
          first_name: "Jackson",
          last_name: "Bache",
          gender_id: 3,
          dob: "2018-11-04"
        },
        {
          first_name: "Consuela",
          last_name: "Midner",
          gender_id: 2,
          dob: "2009-06-05"
        },
        {
          first_name: "Nickolaus",
          last_name: "Bissill",
          gender_id: 1,
          dob: "2016-12-03"
        },
        {
          first_name: "Obie",
          last_name: "Righy",
          gender_id: 2,
          dob: "2017-10-15"
        },
        {
          first_name: "Sophi",
          last_name: "Skyrme",
          gender_id: 3,
          dob: "2010-01-17"
        },
        {
          first_name: "Debbie",
          last_name: "Layhe",
          gender_id: 1,
          dob: "2017-06-10"
        },
        {
          first_name: "Lenora",
          last_name: "Elsley",
          gender_id: 2,
          dob: "2006-03-19"
        },
        {
          first_name: "Lanni",
          last_name: "Greeve",
          gender_id: 1,
          dob: "2006-11-27"
        },
        {
          first_name: "Tadeas",
          last_name: "Comelli",
          gender_id: 1,
          dob: "2019-10-30"
        },
        {
          first_name: "Trixy",
          last_name: "Galton",
          gender_id: 2,
          dob: "2013-01-25"
        },
        {
          first_name: "Dom",
          last_name: "Libbe",
          gender_id: 2,
          dob: "1987-05-03"
        },
        {
          first_name: "Modesty",
          last_name: "Martugin",
          gender_id: 2,
          dob: "1981-10-21"
        },
        {
          first_name: "Sayres",
          last_name: "Szymanowicz",
          gender_id: 2,
          dob: "1987-08-08"
        },
        {
          first_name: "Toby",
          last_name: "Casperri",
          gender_id: 2,
          dob: "2015-09-27"
        },
        {
          first_name: "Gard",
          last_name: "O' Liddy",
          gender_id: 2,
          dob: "2002-06-15"
        },
        {
          first_name: "Betsey",
          last_name: "Bannon",
          gender_id: 3,
          dob: "1999-08-26"
        }
      ]);
    });
};
