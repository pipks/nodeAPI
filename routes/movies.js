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

//listed top10 movies endpoint
router.get('/top10', (req, res) => {
  const promise = Movie.find({ }).limit(10).sort({imdb_score: -1});
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

//listed between two date movies endpoint
router.get('/between/:start_year/:end_year', (req, res) => {
  const {start_year, end_year} = req.params;
  const promise = Movie.find(
    { year: {"$gte": parseInt(start_year), "$lte": parseInt(end_year)} }
  ).sort({year:1});

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});


//movie details
router.get('/:movie_id', (req, res, next) => {
  const promise = Movie.findById(req.params.movie_id);
  promise.then((data) => {
    if(!data)
      next({ message : 'The movie was not found.' })
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

//movie updates
router.put('/:movie_id', (req, res, next) => {
  const promise = Movie.findByIdAndUpdate(
      req.params.movie_id, 
      req.body,
      { //kayıt sonrasında dönen datanın yeni data olmasını sağladık
        new: true
      }
    );
  promise.then((data) => {
    if(!data)
      next({ message : 'The movie was not found.' })
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

//delete movie
router.delete('/:movie_id', (req, res, next) => {
  const promise = Movie.findByIdAndRemove(req.params.movie_id);
  promise.then((data) => {
    if(!data)
      next({ message : 'The movie was not found.' })
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

//created new movie 
router.post('/', (req, res, next) => {


  const movie = new Movie(req.body);
  const promise = movie.save();

  promise.then((data) => {
    res.json(data)
  }).catch(() => {
    res.json(err)
  });
});

module.exports = router;
