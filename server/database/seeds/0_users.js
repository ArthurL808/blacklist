exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Arthur",
          email: "artofbailhawaii@gmail.com",
          password: "bigboss"
        },
        {
          name: "Wandie",
          email: "wdomm1@omniture.com",
          password: "o8W1nsyQdO6E"
        },
        {
          name: "Adah",
          email: "avaugham2@ycombinator.com",
          password: "6wk40n"
        },
        {
          name: "Sallee",
          email: "smcmurthy3@elpais.com",
          password: "Scwli7Xv1oMk"
        },
        {
          name: "Monika",
          email: "mbrotherick4@booking.com",
          password: "9NXDzOz"
        }
      ]);
    });
};
