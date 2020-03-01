exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("defendants")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("defendants").insert([
        {
          first_name: "Swen",
          last_name: "Ainscough",
          address: "0491 Del Sol Plaza",
          gender_id: 2,
          dob: "2011-07-21"
        },
        {
          first_name: "Dione",
          last_name: "Blaes",
          address: "45 Chive Circle",
          gender_id: 3,
          dob: "1984-09-26"
        },
        {
          first_name: "Vyky",
          last_name: "Barsham",
          address: "54 Forest Dale Alley",
          gender_id: 2,
          dob: "2006-05-26"
        },
        {
          first_name: "Lynnea",
          last_name: "Blabey",
          address: "2 Summit Drive",
          gender_id: 3,
          dob: "1983-02-21"
        },
        {
          first_name: "Rob",
          last_name: "Scrimshaw",
          address: "57 Loeprich Park",
          gender_id: 1,
          dob: "1998-11-05"
        },
        {
          first_name: "Beverlee",
          last_name: "Woofenden",
          address: "4 Chive Trail",
          gender_id: 1,
          dob: "2017-08-24"
        },
        {
          first_name: "Miriam",
          last_name: "Peachment",
          address: "92761 Independence Center",
          gender_id: 2,
          dob: "2017-02-15"
        },
        {
          first_name: "Nelia",
          last_name: "Surgeoner",
          address: "56463 Fieldstone Point",
          gender_id: 3,
          dob: "1981-08-11"
        },
        {
          first_name: "Rice",
          last_name: "Hanley",
          address: "529 Sunnyside Center",
          gender_id: 1,
          dob: "2001-06-08"
        },
        {
          first_name: "Urbano",
          last_name: "Hyde-Chambers",
          address: "3844 Talisman Alley",
          gender_id: 2,
          dob: "1981-04-27"
        },
        {
          first_name: "Tyrus",
          last_name: "Cyson",
          address: "51961 Sage Place",
          gender_id: 3,
          dob: "2011-12-12"
        },
        {
          first_name: "Borg",
          last_name: "Lukes",
          address: "3 Emmet Parkway",
          gender_id: 2,
          dob: "2014-12-03"
        },
        {
          first_name: "Jerad",
          last_name: "Lenin",
          address: "794 Russell Junction",
          gender_id: 2,
          dob: "2007-02-24"
        },
        {
          first_name: "Jesselyn",
          last_name: "Munson",
          address: "5 Hoffman Center",
          gender_id: 1,
          dob: "1982-07-09"
        },
        {
          first_name: "Perle",
          last_name: "Facher",
          address: "4263 Eggendart Center",
          gender_id: 2,
          dob: "1994-10-08"
        },
        {
          first_name: "Shelli",
          last_name: "Filyakov",
          address: "6 Rowland Road",
          gender_id: 2,
          dob: "2013-10-14"
        },
        {
          first_name: "Elke",
          last_name: "Panichelli",
          address: "69651 Moland Park",
          gender_id: 1,
          dob: "2001-10-07"
        },
        {
          first_name: "Jaynell",
          last_name: "Fellis",
          address: "69563 Burrows Avenue",
          gender_id: 3,
          dob: "1994-10-13"
        },
        {
          first_name: "Andree",
          last_name: "Alloway",
          address: "514 Twin Pines Trail",
          gender_id: 3,
          dob: "1997-05-27"
        },
        {
          first_name: "Odette",
          last_name: "Budgey",
          address: "3 Monterey Court",
          gender_id: 3,
          dob: "2019-03-24"
        },
        {
          first_name: "Rudyard",
          last_name: "Tomaskov",
          address: "19889 Holmberg Court",
          gender_id: 2,
          dob: "2006-05-30"
        },
        {
          first_name: "Melvin",
          last_name: "Marzelle",
          address: "7274 Spohn Crossing",
          gender_id: 3,
          dob: "2015-03-21"
        },
        {
          first_name: "Henrietta",
          last_name: "Abade",
          address: "39 Valley Edge Avenue",
          gender_id: 1,
          dob: "2010-11-04"
        },
        {
          first_name: "Thorvald",
          last_name: "Dorrity",
          address: "82 Division Circle",
          gender_id: 3,
          dob: "2008-06-03"
        },
        {
          first_name: "Evangelina",
          last_name: "Tattam",
          address: "385 Mccormick Road",
          gender_id: 2,
          dob: "2017-06-21"
        },
        {
          first_name: "Harlen",
          last_name: "Braga",
          address: "75 Basil Parkway",
          gender_id: 1,
          dob: "1997-01-06"
        },
        {
          first_name: "Hazel",
          last_name: "Goldhill",
          address: "8503 Memorial Alley",
          gender_id: 3,
          dob: "2013-12-24"
        },
        {
          first_name: "Carlie",
          last_name: "Aymerich",
          address: "69589 Dwight Road",
          gender_id: 3,
          dob: "2016-06-06"
        },
        {
          first_name: "Greta",
          last_name: "Trime",
          address: "3622 Butterfield Pass",
          gender_id: 2,
          dob: "2006-08-22"
        },
        {
          first_name: "Irma",
          last_name: "Catherick",
          address: "6 Acker Plaza",
          gender_id: 1,
          dob: "2000-11-06"
        },
        {
          first_name: "Demott",
          last_name: "Lambricht",
          address: "59 Kedzie Park",
          gender_id: 1,
          dob: "2013-02-16"
        },
        {
          first_name: "Demott",
          last_name: "Styche",
          address: "715 Chinook Road",
          gender_id: 1,
          dob: "2019-09-09"
        },
        {
          first_name: "Jacynth",
          last_name: "Asson",
          address: "04 Oxford Terrace",
          gender_id: 1,
          dob: "1989-05-04"
        },
        {
          first_name: "Artemis",
          last_name: "Cowpertwait",
          address: "82 Granby Lane",
          gender_id: 2,
          dob: "1990-05-04"
        },
        {
          first_name: "Carlye",
          last_name: "Milkins",
          address: "029 Moose Pass",
          gender_id: 2,
          dob: "1992-09-11"
        },
        {
          first_name: "Dix",
          last_name: "Matyushkin",
          address: "20689 Quincy Parkway",
          gender_id: 1,
          dob: "1985-04-18"
        },
        {
          first_name: "Elke",
          last_name: "Skehens",
          address: "9 Loeprich Point",
          gender_id: 3,
          dob: "2014-07-06"
        },
        {
          first_name: "Marnie",
          last_name: "Shapland",
          address: "7584 Express Trail",
          gender_id: 2,
          dob: "1998-01-04"
        },
        {
          first_name: "Maddie",
          last_name: "Aiken",
          address: "5794 East Way",
          gender_id: 3,
          dob: "2017-09-02"
        },
        {
          first_name: "Britni",
          last_name: "Pettingall",
          address: "69 Sommers Alley",
          gender_id: 3,
          dob: "1998-06-11"
        },
        {
          first_name: "Latisha",
          last_name: "Morrall",
          address: "2931 Warrior Lane",
          gender_id: 2,
          dob: "2017-07-24"
        },
        {
          first_name: "Tomasina",
          last_name: "Gregoriou",
          address: "1 Norway Maple Park",
          gender_id: 2,
          dob: "2014-07-14"
        },
        {
          first_name: "Leigh",
          last_name: "Dradey",
          address: "1885 Shasta Park",
          gender_id: 2,
          dob: "2015-04-27"
        },
        {
          first_name: "Theadora",
          last_name: "Pruckner",
          address: "6 Thackeray Parkway",
          gender_id: 1,
          dob: "1983-10-13"
        },
        {
          first_name: "Vicky",
          last_name: "Rotchell",
          address: "726 Browning Parkway",
          gender_id: 1,
          dob: "1981-05-19"
        },
        {
          first_name: "Delphinia",
          last_name: "Drinkel",
          address: "7 Hollow Ridge Pass",
          gender_id: 1,
          dob: "1990-04-22"
        },
        {
          first_name: "Garrick",
          last_name: "Bakey",
          address: "16776 Old Shore Plaza",
          gender_id: 2,
          dob: "2004-02-03"
        },
        {
          first_name: "Robbin",
          last_name: "Monery",
          address: "3398 Spaight Plaza",
          gender_id: 1,
          dob: "1983-06-21"
        },
        {
          first_name: "Janelle",
          last_name: "Lorek",
          address: "87705 Armistice Trail",
          gender_id: 3,
          dob: "1980-09-07"
        },
        {
          first_name: "Godfree",
          last_name: "Clemence",
          address: "87 Sloan Alley",
          gender_id: 1,
          dob: "2015-10-18"
        },
        {
          first_name: "Dionne",
          last_name: "Duddle",
          address: "8 Valley Edge Court",
          gender_id: 3,
          dob: "1999-10-21"
        },
        {
          first_name: "Luella",
          last_name: "Poulgreen",
          address: "00492 Thackeray Place",
          gender_id: 2,
          dob: "2016-06-21"
        },
        {
          first_name: "Cheston",
          last_name: "Segeswoeth",
          address: "2851 Bay Court",
          gender_id: 2,
          dob: "1990-03-12"
        },
        {
          first_name: "Donall",
          last_name: "Bakewell",
          address: "1175 Rigney Parkway",
          gender_id: 2,
          dob: "1994-01-22"
        },
        {
          first_name: "Bay",
          last_name: "Brounfield",
          address: "2760 Continental Alley",
          gender_id: 1,
          dob: "2016-09-21"
        },
        {
          first_name: "Rianon",
          last_name: "Lea",
          address: "9 Lindbergh Way",
          gender_id: 1,
          dob: "2017-03-23"
        },
        {
          first_name: "Powell",
          last_name: "Willmont",
          address: "62 Sachs Junction",
          gender_id: 3,
          dob: "1987-05-17"
        },
        {
          first_name: "Terrell",
          last_name: "Killshaw",
          address: "99994 Schlimgen Junction",
          gender_id: 1,
          dob: "1987-12-26"
        },
        {
          first_name: "Tabbitha",
          last_name: "Vawton",
          address: "9 Bunting Alley",
          gender_id: 3,
          dob: "2013-03-18"
        },
        {
          first_name: "Otis",
          last_name: "Wisbey",
          address: "913 Forest Dale Trail",
          gender_id: 2,
          dob: "1985-05-26"
        },
        {
          first_name: "Colver",
          last_name: "Spurge",
          address: "22 Forest Junction",
          gender_id: 2,
          dob: "2017-02-21"
        },
        {
          first_name: "Lyssa",
          last_name: "Danshin",
          address: "5 Memorial Trail",
          gender_id: 3,
          dob: "1993-03-08"
        },
        {
          first_name: "Earle",
          last_name: "Rocca",
          address: "6 7th Road",
          gender_id: 1,
          dob: "2008-12-30"
        },
        {
          first_name: "Justine",
          last_name: "Ronca",
          address: "4489 Tomscot Drive",
          gender_id: 1,
          dob: "1985-10-18"
        },
        {
          first_name: "Charleen",
          last_name: "Hawney",
          address: "93 Northland Drive",
          gender_id: 2,
          dob: "1994-10-15"
        },
        {
          first_name: "Lois",
          last_name: "Sebborn",
          address: "874 Mcbride Terrace",
          gender_id: 2,
          dob: "2007-12-01"
        },
        {
          first_name: "Hewe",
          last_name: "Hatch",
          address: "36688 High Crossing Center",
          gender_id: 1,
          dob: "1989-06-05"
        },
        {
          first_name: "Chip",
          last_name: "Bristo",
          address: "969 Green Avenue",
          gender_id: 1,
          dob: "2017-05-07"
        },
        {
          first_name: "Sonnie",
          last_name: "Ratcliffe",
          address: "1 Dwight Street",
          gender_id: 2,
          dob: "2008-02-23"
        },
        {
          first_name: "Jed",
          last_name: "Breach",
          address: "514 Weeping Birch Lane",
          gender_id: 2,
          dob: "2011-09-06"
        },
        {
          first_name: "Goldarina",
          last_name: "Gibbett",
          address: "6290 Evergreen Alley",
          gender_id: 1,
          dob: "2011-02-03"
        },
        {
          first_name: "Gordon",
          last_name: "Caunce",
          address: "69 Mandrake Pass",
          gender_id: 1,
          dob: "2018-12-26"
        },
        {
          first_name: "Derry",
          last_name: "Wearne",
          address: "0653 Del Sol Hill",
          gender_id: 1,
          dob: "2007-03-24"
        },
        {
          first_name: "Darrick",
          last_name: "Spadelli",
          address: "20 Sherman Drive",
          gender_id: 2,
          dob: "2017-06-17"
        },
        {
          first_name: "Shane",
          last_name: "Hickenbottom",
          address: "0 Weeping Birch Junction",
          gender_id: 2,
          dob: "2012-05-27"
        },
        {
          first_name: "Garry",
          last_name: "Ettery",
          address: "0252 7th Crossing",
          gender_id: 3,
          dob: "1985-07-23"
        },
        {
          first_name: "Anetta",
          last_name: "Harridge",
          address: "51810 Columbus Point",
          gender_id: 2,
          dob: "1997-04-01"
        },
        {
          first_name: "Rora",
          last_name: "Kuna",
          address: "39 Novick Circle",
          gender_id: 2,
          dob: "1991-04-29"
        },
        {
          first_name: "Mahmoud",
          last_name: "Muehle",
          address: "055 Portage Street",
          gender_id: 2,
          dob: "2002-03-16"
        },
        {
          first_name: "Elysia",
          last_name: "Baumler",
          address: "69332 Lien Crossing",
          gender_id: 1,
          dob: "2015-09-02"
        },
        {
          first_name: "Stacey",
          last_name: "Januszewicz",
          address: "1 Holmberg Parkway",
          gender_id: 2,
          dob: "1988-05-20"
        },
        {
          first_name: "Cicily",
          last_name: "Bayly",
          address: "2 Shopko Avenue",
          gender_id: 2,
          dob: "2015-11-20"
        },
        {
          first_name: "Austin",
          last_name: "Ruggen",
          address: "827 Westerfield Trail",
          gender_id: 2,
          dob: "2013-02-01"
        },
        {
          first_name: "Bonni",
          last_name: "Pellingar",
          address: "641 Cambridge Lane",
          gender_id: 1,
          dob: "2004-12-26"
        },
        {
          first_name: "Nilson",
          last_name: "Brockelsby",
          address: "03769 Sutherland Lane",
          gender_id: 2,
          dob: "1988-05-11"
        },
        {
          first_name: "Odelia",
          last_name: "Shekle",
          address: "068 Texas Trail",
          gender_id: 1,
          dob: "2005-02-12"
        },
        {
          first_name: "Sibylle",
          last_name: "Riggoll",
          address: "5 Hanover Road",
          gender_id: 1,
          dob: "2018-12-21"
        },
        {
          first_name: "Norry",
          last_name: "Hadland",
          address: "1741 Nancy Center",
          gender_id: 2,
          dob: "2008-06-24"
        },
        {
          first_name: "Ellen",
          last_name: "Selliman",
          address: "46321 Petterle Plaza",
          gender_id: 2,
          dob: "1986-02-20"
        },
        {
          first_name: "Evaleen",
          last_name: "Vedeshkin",
          address: "21733 Donald Pass",
          gender_id: 2,
          dob: "2011-06-06"
        },
        {
          first_name: "Sheilah",
          last_name: "Virgoe",
          address: "91291 Laurel Trail",
          gender_id: 2,
          dob: "1981-11-09"
        },
        {
          first_name: "Jarid",
          last_name: "Darwen",
          address: "8 La Follette Alley",
          gender_id: 1,
          dob: "1983-06-07"
        },
        {
          first_name: "Roth",
          last_name: "Muscott",
          address: "3781 Dixon Place",
          gender_id: 1,
          dob: "1991-10-22"
        },
        {
          first_name: "Ralph",
          last_name: "Lewens",
          address: "3896 School Road",
          gender_id: 3,
          dob: "1999-01-31"
        },
        {
          first_name: "Mord",
          last_name: "Domican",
          address: "62274 Transport Place",
          gender_id: 2,
          dob: "1988-02-01"
        },
        {
          first_name: "Rebecca",
          last_name: "Harvison",
          address: "936 Debra Trail",
          gender_id: 2,
          dob: "2000-07-19"
        },
        {
          first_name: "Miner",
          last_name: "Townsend",
          address: "45 Stephen Terrace",
          gender_id: 1,
          dob: "2007-07-23"
        },
        {
          first_name: "Sonya",
          last_name: "Rubenovic",
          address: "2 Moose Avenue",
          gender_id: 1,
          dob: "1996-05-23"
        },
        {
          first_name: "Daffie",
          last_name: "Veryard",
          address: "543 Tennyson Crossing",
          gender_id: 3,
          dob: "2005-08-07"
        },
        {
          first_name: "Clio",
          last_name: "McKennan",
          address: "3219 Everett Way",
          gender_id: 2,
          dob: "2001-04-30"
        }
      ]);
    });
};
