const express = require("express");
const bodyParser = require("body-parser");
const api = require("./routes/api/index");
const decorator = require("./database/decorator");

const session = require("express-session");
const passport = require("passport");
const redis = require("redis");
const RedisStore = require("connect-redis")(session);

require("dotenv").config();

const PORT = process.env.EXPRESS_HOST_PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;

if (!PORT) {
  console.log("No Port Found");
}
if (!SESSION_SECRET) {
  console.log("No Session Secret Found");
}
if (!REDIS_HOSTNAME) {
  console.log("No Redis Hostname Found");
}
if (!PORT || !SESSION_SECRET || !REDIS_HOSTNAME) {
  return process.exit(1);
}


let client = redis.createClient({ url: process.env.REDIS_HOSTNAME });
const app = express();
app.use(bodyParser.json({ extended: true }));

app.use(decorator);
app.use(
  session({
    store: new RedisStore({ client }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);


app.use(passport.initialize());
app.use(passport.session());

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.status(401).send("Unauthorized")
  }
}

// routes
app.use('/api/auth', api.auth);
app.use("/api/users",isAuthenticated, api.users);
app.use("/api/persons",isAuthenticated, api.persons);
app.use("/api/deragatoryMarks",isAuthenticated, api.deragatoryMarks);
app.use("/api/genders",isAuthenticated, api.genders);
app.use("/api/hunts",isAuthenticated, api.hunts);
app.use("/api/addresses",isAuthenticated, api.addresses);
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't seem to find ${req.originalUrl}`,
  });
});

app.listen(PORT, () => {
  console.log(`Server stated on port: ${PORT}`);
});
