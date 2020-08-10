exports.seed = function (knex) {
  return knex("associates")
    .del()
    .then(function () {
      return knex("associates").insert([
        {
          first_name: "Kitti",
          last_name: "Batham",
          nickname: "Tempsoft",
          person_id: 2,
          relationship:'sibling'
        },
        {
          first_name: "Charley",
          last_name: "Soppit",
          nickname: "Stringtough",
          person_id: 10,
          relationship:'spouse'
        },
        {
          first_name: "Rebe",
          last_name: "Itter",
          nickname: "Solarbreeze",
          person_id: 5,
          relationship:'sibling'
        },
        {
          first_name: "Cinnamon",
          last_name: "Putten",
          nickname: "Quo Lux",
          person_id: 7,
          relationship:'spouse'
        },
        {
          first_name: "Marci",
          last_name: "Baison",
          nickname: "Voyatouch",
          person_id: 3,
          relationship:'friend'
        },
        {
          first_name: "Gill",
          last_name: "McGinley",
          nickname: "Bamity",
          person_id: 4,
          relationship:'coworker'
        },
        {
          first_name: "Igor",
          last_name: "Wilsee",
          nickname: "Alpha",
          person_id: 8,
          relationship:'neighbor'
        },
        {
          first_name: "Jorry",
          last_name: "Le Galle",
          nickname: "Domainer",
          person_id: 6,
          relationship:'sibling'
        },
        {
          first_name: "Wilona",
          last_name: "Culkin",
          nickname: "Wrapsafe",
          person_id: 9,
          relationship:'neighbor'
        },
        {
          first_name: "Jobie",
          last_name: "Beernaert",
          nickname: "Mat Lam Tam",
          person_id: 1,
          relationship:'cousin'
        },
        {
          first_name: "Herman",
          last_name: "Troker",
          nickname: "Alpha",
          person_id: 3,
          relationship:'grandparent'
        },
        {
          first_name: "Dukie",
          last_name: "Jenkins",
          nickname: "Alpha",
          person_id: 5,
          relationship:'cousin'
        },
        {
          first_name: "Susette",
          last_name: "Pinsent",
          nickname: "Vagram",
          person_id: 2,
          relationship:'friend'
        },
        {
          first_name: "Angelina",
          last_name: "Grinsted",
          nickname: "Sonsing",
          person_id: 7,
          relationship:'sibling'
        },
        {
          first_name: "Dinah",
          last_name: "Foxen",
          nickname: "Home Ing",
          person_id: 3,
          relationship:'coworker'
        },
      ]);
    });
};
