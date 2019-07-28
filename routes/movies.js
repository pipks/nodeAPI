const express = require('express');
const router = express.Router();

//Models

const Movie = require('../models/Movie');

//listed all movies endpoint
router.get('/', (req, res) => {
  const promise = Movie.find({ });
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});


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
