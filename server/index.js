const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const detail = require('./routes/detail.js');
// const userRequest = require('./routes/userRequest.js');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use('/userRequest', userRequest);
app.use('/homes/:home', express.static(path.join(__dirname, '/../client/dist/')));
app.use('/addresses/:address', express.static(path.join(__dirname, '/../client/dist/')));
app.use('/api', detail);


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('working on ', port);
});
