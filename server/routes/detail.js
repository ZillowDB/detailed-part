const express = require('express');
const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1'], keyspace: 'sdc' });

const router = express.Router();
const query = 'SELECT * FROM detailid WHERE id=?';

// get detail info for all houses
// router.get('/homes', (req, res) => {
//   Detail.find({})
//     .then(data => res.status(200).send(data))
//     .catch(error => res.status(500).send(error));
// });

// get detail info for one house
router.get('/homes/:home', (req, res) => {
  const home = Number(req.params.home);
  console.log(home);
  client.execute(query, [home], { prepare: true })
    .then((data) => {
      console.log(data);
      res.status(200).send(data);
    })
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
