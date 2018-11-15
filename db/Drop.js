const Detail = require('./detail.js');

const dropAll = function() {
  return Detail.remove({});
};

dropAll();