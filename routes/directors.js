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
    //join işlemi yapacağımız için promisi böyle oluşturduk
    const promise = Director.aggregate([
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
                    $push: '$allMovies'
                }
            }
        },
        {
            $project: {
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
  module.exports = router;