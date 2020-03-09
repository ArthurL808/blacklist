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
        },
        {
          name: "Dolley",
          email: "dwackett5@addthis.com",
          password: "k4D1H2ap1jk"
        },
        {
          name: "Gideon",
          email: "gmccafferty6@buzzfeed.com",
          password: "WsbbLmLp"
        },
        {
          name: "Lorens",
          email: "lwadwell7@cbsnews.com",
          password: "BUfa77c"
        },
        {
          name: "Ruthy",
          email: "rmcdirmid8@topsy.com",
          password: "yOTV8onzqzQQ"
        },
        {
          name: "Eartha",
          email: "eedinboro9@whitehouse.gov",
          password: "g6KClKRq"
        }
      ]);
    });
};
