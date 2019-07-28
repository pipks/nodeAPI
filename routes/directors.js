const express = require('express');
const router = express.Router();

//Models İmport
const Director = require('../models/Director');

//created new director 
router.post('/', (req, res) => {

    const director = new Director(req.body);
    const promise = director.save();
  
    promise.then((data) => {
      res.json(data)
    }).catch(() => {
      res.json(err)
    });
  });

  module.exports = router;