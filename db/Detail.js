const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const detailedSchema = require('./schema.js');

const Detail = mongoose.model('Detail', detailedSchema);

module.exports = Detail;
