const express = require('express');
const router = express.Router();
const UserRequest = require('../../db/UserRequest.js');

//get a single user request
router.get('/homes/:request', (req, res) => {
  let data = req.body.data;
  let phoneNumber = Number(data.phone);
  UserRequest.findOne({ phone: phoneNumber })
  .then(data => res.send(data))
  .catch(error => res.sendStatus(500));
})

//get all user requests
router.get('/homes/all', (req, res) => {
  UserRequest.find({})
  .then(data => res.send(data))
  .catch(error => res.sendStatus(500));
})

//update a user request
router.put('/homes/:index', (req, res) => {
  let query = req.body.data;
  let phoneNumber = Number(data.phone);
  UserRequest.findOneAndUpdate(query, { phone: phoneNumber })
  .then(result => res.send(result))
  .catch(error => res.sendStatus(500));
});

//delete a user request
router.delete('/homes/:index', (req, res) => {
  let data = req.body.data;
  let phoneNumber = Number(data.phone);
  UserRequest.findOneAndRemove({ phone: phoneNumber })
  .then(result => res.send(result))
  .catch(error => res.sendStatus(500));
});

// post a user request
router.post('/homes/:index', (req, res) => {
  let data = req.body.data;
  let phoneNumber = Number(data.phone);
  UserRequest.findOne({ phone: phoneNumber })
    .then(result => {
      if (!phoneNumber) {
          throw 'Please fill out the form';
      } else if (!result) {
        UserRequest.create(data)
          .then( result => {
            res.send(result);
          })
        } else {
          throw 'You already made an offer!';
        }
    })
    .catch(err => {
      res.send(err);
    })
});

module.exports = router;