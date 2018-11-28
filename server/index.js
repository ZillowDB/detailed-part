require('newrelic');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const detail = require('./routes/detail.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(['/homes/:home', '/addresses/:address'], express.static(path.join(__dirname, '/../client/dist/')));
app.use('/api', detail);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('working on ', port);
});
