const mongoose = require('mongoose');
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
    }).catch((err) => {
      res.json(err)
    });
  });

//listed all directors and movies
router.get('/', (req, res) => {
    
    const promise = Director.find({ });
    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

//director details endpoints
router.get('/:director_id', (req, res) => {
    //join işlemi yapacağımız için promisi böyle oluşturduk
    const promise = Director.aggregate([
        {
			$match: { //match ile _id değeri request ile gelen id eşit olan veriyi çektik.
                '_id': mongoose.Types.ObjectId(req.params.director_id), 
                //veriyi ObjectId formatına çevirmek için mongoose den faydalandık.
			}
		},
        {
            $lookup: { //join için bir döngü oluşturduk
                from: 'movies', //sorgulanacak collections adı
                localField: '_id', // localde bulunan _id değerini
                foreignField: 'director_id', //colectionda bulunan director_id ile eşleştir.
                as: 'allMovies', //eşleşen değeri movies olarak ata.
            }
        },
        {
            $unwind: { //lookup sonucunda oluşan veriyi burda alıyoruz.
                path: '$allMovies',
                preserveNullAndEmptyArrays: true,
            }
        },
        {
            $group: { //film ve yönetmenleri grup halinde gösterelim
                _id: { //yönetmene ait bilgileri ekranda tek sefer gösterelim
                    _id: '$_id',
                    name: '$name',
                    surname: '$surname',
                    bio: '$bio',
                },
                movies: { //yönetmene ait bütün filmleri liste halinde gösterelim.
                  $push: {
                    _id: '$allMovies._id',
                    title: '$allMovies.title',
                    category: '$allMovies.category',
                    country: '$allMovies.country',
                    year: '$allMovies.year',
                    imdb_score: '$allMovies.imdb_score',
                  }
                }
            }
        },
        {
            $project: {// group ile aldığımız verilerin gösterimini bu adamla düzenliyoruz.
                _id: '$_id._id',
                name: '$_id.name',
                surname: '$_id.surname',
                bio: '$_id.bio',
                movies: '$movies',
            }
        }
    ]);

    promise.then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

//director updates
router.put('/:director_id', (req, res, next) => {
    const promise = Director.findByIdAndUpdate(
        req.params.director_id, 
        req.body,
        { //kayıt sonrasında dönen datanın yeni data olmasını sağladık
          new: true
        }
      );
    promise.then((data) => {
      if(!data)
        next({ message : 'The director was not found.' })
      res.json(data);
    }).catch((err) => {
      res.json(err);
    });
  });

  //director delete
//delete movie
router.delete('/:director_id', (req, res, next) => {
  const promise = Director.findByIdAndRemove(req.params.director_id);
  promise.then((data) => {
    if(!data)
      next({ message : 'The movie was not found.' })
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});
  module.exports = router;