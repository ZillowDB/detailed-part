const express = require('express');
const router = express.Router();
const Detail = require('../../db/Detail.js');

//get detail info for all houses
router.get('/homes/all', (req, res) => {
  Detail.find({})
    .then(data => res.send(data))
    .catch(error => res.sendStatus(500));
});

//get detail info for one house
router.get('/homes/:home', (req, res) => {
  Detail.findOne({ _index: req.params.home })
    .then(data => res.send(data))
    .catch(error => res.sendStatus(500));
}); 

//post detail info for one house
router.post('/homes/:home', (req, res) => {
  let body = req.body.data;
  Detail.insert({ body })
    .then(result => res.send(result))
    .catch(error => res.sendStatus(500));
});

//update detail info for one house
router.put('/homes/:home', (req, res) => {
  let body = req.body.data;
  Detail.update({ body })
    .then(result => res.send(result))
    .catch(error => res.sendStatus(500));
});

//delete detail info for one house
router.delete('/homes/:home', (req, res) => {
  let id = req.params.home;
  Detail.remove({ _index: id })
    .then(result => res.send(result))
    .catch(error => res.sendStatus(500));
})

module.exports = router;