exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Arthur",
          company_name: "Art of bail hawaii",
          password: "bigboss",
          email: 'artofbailhawaii@gmail.com'
        },
        {
          name: "Scott",
          company_name: "Aloha Bail bonds",
          password: "o8W1nsyQdO6E",
          email: 'alohabailbonds@newmail.com'
        },
        {
          name: "Boi",
          company_name: "24hr Bail bonds",
          password: "6wk40n",
          email: '24bail@bmail.com'
        },
        {
          name: "Nick",
          company_name: "A-1 Bail bonds",
          password: "Scwli7Xv1oMk",
          email: 'a1bail@newmail.com'
        },
        {
          name: "Monika",
          company_name: "Ali'i Bail bonds",
          password: "9NXDzOz",
          email: 'Aliibail@newmail.com'
        }
      ]);
    });
};
