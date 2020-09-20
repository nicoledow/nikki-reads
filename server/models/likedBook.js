const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likedBookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authorId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    },
    read: {
        type: Boolean,
        required: true,
        default: false
    },
    rating: {
        type: Number
    }
});

module.exports = likedBookSchema;