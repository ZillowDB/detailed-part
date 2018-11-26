require('dotenv').config();
const express = require('express');
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: [process.env.CP], keyspace: process.env.KEY });
const router = express.Router();

const idQuery = 'SELECT * FROM detailid WHERE id=?';
const mvQuery = 'SELECT * FROM id_mv WHERE address=?';

// get detail info for all houses
// router.get('/homes', (req, res) => {
//   Detail.find({})
//     .then(data => res.status(200).send(data))
//     .catch(error => res.status(500).send(error));
// });

// get detail info for one house
router.get('/homes/:home/details', (req, res) => {
  const home = Number(req.params.home);
  client.execute(idQuery, [home], { prepare: true })
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send(error));
});

// get detail info for one address
router.get('/addresses/:address/details', (req, res) => {
  const address = req.params.address.replace(/-/g, ' ');
  client.execute(mvQuery, [address], { prepare: true })
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send(error));
});

// post detail info for one house
// router.post('/homes/:home', (req, res) => {
//   const body = req.body.data;
//   Detail.insert({ body })
//     .then(result => res.status(200).send(result))
//     .catch(error => res.status(500).send(error));
// });

// update detail info for one house
// router.put('/homes/:home', (req, res) => {
//   const body = req.body.data;
//   Detail.update({ body })
//     .then(result => res.status(200).send(result))
//     .catch(error => res.status(500).send(error));
// });

// delete detail info for one house
// router.delete('/homes/:home', (req, res) => {
//   const id = req.params.home;
//   Detail.remove({ _index: id })
//     .then(result => res.status(200).send(result))
//     .catch(error => res.status(500).send(error));
// });

module.exports = router;
