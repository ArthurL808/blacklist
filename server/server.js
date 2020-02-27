const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api/index')
const decorator = require('./database/decorator');


const PORT = process.env.EXPRESS_HOST_PORT;
const SESSION_SECRET = process.env.SESSION_SECRET;
const REDIS_HOSTNAME = process.env.REDIS_HOSTNAME;

if (!PORT) { console.log('No Port Found'); }
if (!SESSION_SECRET) { console.log('No Session Secret Found'); }
if (!REDIS_HOSTNAME) { console.log('No Redis Hostname Found'); }
if (!PORT || !SESSION_SECRET || !REDIS_HOSTNAME) { return process.exit(1); }


const app = express();
app.use(bodyParser.json({ extended: true }));


app.use(decorator);

// routes
app.use('/api/users', api.users);
app.use('/api/defendants', api.defendants)

app.listen(PORT, () => {
  console.log(`Server stated on port: ${PORT}`);
});