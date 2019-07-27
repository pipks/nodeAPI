const mongoose = require('mongoose');


module.exports = () => {
    mongoose.connect('mongodb://movie_user:abcd1234@ds147436.mlab.com:47436/heroku_hf6sn4sw', { useNewUrlParser: true });
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });
    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });
}