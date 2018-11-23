const express = require('express');
const cass = require('../index.js');

const router = express.Router();
// const UserRequest = require('../../db/userRequest.js');

// get a single user request
router.get('/homes/:home', (req, res) => {
  const { data } = req;
  const phoneNumber = Number(data.phone);
  UserRequest.findOne({ phone: phoneNumber })
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send(error));
});

// get all user requests
router.get('/homes', (req, res) => {
  UserRequest.find({})
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send(error));
});

// update a user request
router.put('/homes/:home', (req, res) => {
  const { data } = req;
  const phoneNumber = Number(data.phone);
  UserRequest.findOneAndUpdate(data, { phone: phoneNumber })
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send(error));
});

// delete a user request
router.delete('/homes/:home', (req, res) => {
  const { data } = req;
  const phoneNumber = Number(data.phone);
  UserRequest.findOneAndRemove({ phone: phoneNumber })
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send(error));
});

// post a user request
router.post('/homes/:home', (req, res) => {
  const { data } = req;
  const phoneNumber = Number(data.phone);
  UserRequest.findOne({ phone: phoneNumber })
    .then((result) => {
      if (!phoneNumber) {
        throw 'Please fill out the form';
      } else if (!result) {
        return UserRequest.create(data);
      } else {
        throw 'You already made an offer!';
      }
    })
    .then(id => res.status(200).send(id))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
