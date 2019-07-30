const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type:String,
        required: true,
        unique: true,
        minlength: 3,
    },
    password: {
        type:String,
        minlength: 3
    }
});

module.exports = mongoose.model('user', UserSchema);