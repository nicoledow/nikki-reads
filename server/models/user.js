const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    books: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Books' }
    ]
});

module.exports = mongoose.model('User', userSchema);