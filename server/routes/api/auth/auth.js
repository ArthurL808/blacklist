const express = require("express");
const router = express.Router();
const session = require("express-session");
const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local");

require("dotenv").config();

const User = require("../../../database/models/User");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);
const saltRounds = 12;
let client = redis.createClient({ url: process.env.REDIS_HOSTNAME });

router.use(
  session({
    store: new RedisStore({ client }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

router.use(passport.initialize());
router.use(passport.session());

passport.use(
  new LocalStrategy({ usernameField: "email" }, function (
    username,
    password,
    done
  ) {
    return new User({ email: username })
      .fetch()
      .then((user) => {
        if (user === null) {
          return done(null, false, { message: "bad username or password" });
        } else {
          user = user.toJSON();

          bcrypt.compare(password, user.password).then((res) => {
            // Happy route: username exists, password matches
            if (res) {
              return done(null, user); //this is the user that goes to serialize
            }
            // Error Route: Username exists, password does not match
            else {
              return done(null, false, { message: "bad username or password" });
            }
          });
        }
      })
      .catch((err) => {
        console.log("error: ", err);
        return done(err);
      });
  })
);

passport.serializeUser(function (user, done) {
  console.log("serializing");
  return done(null, { id: user.id, username: user.email ,name: user.name});
});

passport.deserializeUser(function (user, done) {
  console.log("deserializing");
  return done(null, user);
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.session.passport.user);
});

router.post("/register", (req, res) => {
  bcrypt.genSalt(saltRounds, (err, salt) => {
    if (err) {
      console.log(err);
    } // return 500

    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) {
        console.log(err);
      } // return 500

      return new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
        company_name: req.body.company_name,
      })
        .save()
        .then((user) => {
          //change redirect later to login page
          return res.redirect("/api/users");
        })
        .catch((err) => {
          console.log(err);
          return res.send("Error creating account");
        });
    });
  });
});

router.post("/logout", (req, res) => {
  req.logout();
  res.json({ status: 200 });
});

module.exports = router;
