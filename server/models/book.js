const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
  },
  isbn10: {
    type: String,
    required: true,
  },
  // author: {
  //     type: Schema.Types.ObjectId,
  //     required: true,
  //     ref: 'Author'
  // },
  read: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
  },
  buyURL: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  nytBookURI: {
    type: String
  },
  tags: [{ type: String }],
  userIds: [{ type: String }]
});

module.exports = mongoose.model("Book", bookSchema);
