const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Book title is required'],
    trim: true,
    maxLength: [100, 'Book title can not be more than 100 characters'],
  },
  author: {
    type: String,
    required: [true, 'Author title is required'],
    trim: true,
  },
  year: {
    type: Number,
    min: [1000, 'Year must be atleast 1000'],
    max: [new Date().getFullYear(), 'year cannot be in the future'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Book = model('Book', BookSchema);

model.exports = Book;
  