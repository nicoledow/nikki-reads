const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    // author: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'Author'
    // },
    read: {
        type: Boolean,
        required: true,
        default: false
    },
    rating: {
        type: Number
    },
    buyURL: {
        type: String
    },
    imageUrl: {
        type: String,
        required: true
    },
    nytBookURI: {
        type: String,
        required: true
    },
    tags: [{type: String}]
});

module.exports = mongoose.model('Book', bookSchema);