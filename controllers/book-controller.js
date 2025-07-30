const Book = require('../models/book');

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find();
    if (allBooks) {
      res.status(201).json({
        success: true,
        message: 'All Books succesfully loaded',
        data: allBooks,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

const getSingBookById = async (req, res) => {};

const addNewBook = async (req, res) => {
  try {
    const { title, author, year } = req.body;
    const newBook = await Book.create({ title, author, year });
    if (newBook) {
      res.status(201).json({
        success: true,
        message: 'Book added succesfully',
        data: newBook,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error.message,
    });
  }
};

const updateSingleBook = async (req, res) => {};

const deleteBook = async (req, res) => {};

module.exports = {
  getAllBooks,
  getSingBookById,
  addNewBook,
  updateSingleBook,
  deleteBook,
};
