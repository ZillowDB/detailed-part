const express = require('express');

const router = express.Router();
const UserRequest = require('../../db/UserRequest.js');

// get a single user request
router.get('/homes/:request', (req, res) => {
  const { data } = req;
  const phoneNumber = Number(data.phone);
  UserRequest.findOne({ phone: phoneNumber })
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send(error));
});

// get all user requests
router.get('/homes/all', (req, res) => {
  UserRequest.find({})
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send(error));
});

// update a user request
router.put('/homes/:index', (req, res) => {
  const { data } = req;
  const phoneNumber = Number(data.phone);
  UserRequest.findOneAndUpdate(data, { phone: phoneNumber })
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send(error));
});

// delete a user request
router.delete('/homes/:index', (req, res) => {
  const { data } = req;
  const phoneNumber = Number(data.phone);
  UserRequest.findOneAndRemove({ phone: phoneNumber })
    .then(result => res.status(200).send(result))
    .catch(error => res.status(500).send(error));
});

// post a user request
router.post('/homes/:index', (req, res) => {
  const { data } = req;
  const phoneNumber = Number(data.phone);
  UserRequest.findOne({ phone: phoneNumber })
    .then((result) => {
      if (!phoneNumber) {
        throw 'Please fill out the form';
      } else if (!result) {
        UserRequest.create(data)
          .then((id) => {
            res.status(200).send(id);
          });
      } else {
        throw 'You already made an offer!';
      }
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
