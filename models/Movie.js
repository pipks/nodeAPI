const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//created Movie Schema
const MovieSchema = new Schema({
    director_id : Schema.Types.ObjectId,
    title : {
        type: String,
        required: true
    },
    category : String,
    country : String,
    year : Number,
    imdb_score: Number,
    createdAt : {
        type : Date,
        default : Date.now,
    }
});

//export Movie Schema
module.exports = mongoose.model('movie', MovieSchema);