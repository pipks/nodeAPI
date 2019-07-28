const express = require('express');
const router = express.Router();

//Models

const Movie = require('../models/Movie');

//created new movie 
router.post('/', (req, res, next) => {
  const {title, imdb_score, category, country, year} = req.body;
  const movie = new Movie({
    title,
    imdb_score,
    category,
    country,
    year
  });

  const promise = movie.save();

  promise.then((data) => {
    res.json(data)
  }).catch(() => {
    res.json(err)
  });
});

module.exports = router;
