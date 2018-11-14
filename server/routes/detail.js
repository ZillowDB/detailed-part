const express = require('express');

const router = express.Router();
const Detail = require('../../db/Detail.js');

// get detail info for all houses
router.get('/homes/all', (req, res) => {
  Detail.find({})
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send(error));
});

// get detail info for one house
router.get('/homes/:home', (req, res) => {
  Detail.findOne({ _index: req.params.home })
    .then(data => res.status(200).send(data))
    .catch(error => res.status(500).send(error));
});

// post detail info for one house
router.post('/homes/:home', (req, res) => {
  const body = req.body.data;
  Detail.insert({ body })
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send(error));
});

// update detail info for one house
router.put('/homes/:home', (req, res) => {
  const body = req.body.data;
  Detail.update({ body })
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send(error));
});

// delete detail info for one house
router.delete('/homes/:home', (req, res) => {
  const id = req.params.home;
  Detail.remove({ _index: id })
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send(error));
});

module.exports = router;
