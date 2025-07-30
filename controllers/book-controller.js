const Book = require('../models/book');

// Async wrapper to handle try-catch
const asyncWrapper = fn => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      console.log(error);
      if (error.name === 'CastError') {
        return res.status(404).json({
          success: false,
          message: 'Book not found, please try again!',
        });
      }
      res.status(500).json({
        success: false,
        message: 'Something went wrong, please try again!',
        error: error.message,
      });
    }
  };
};
const getAllBooks = asyncWrapper(async (req, res) => {
  const allBooks = await Book.find({});
  if (allBooks?.length > 0) {
    res.status(200).json({
      success: true,
      message: 'All Books fetched successfully',
      data: allBooks,
    });
  } else {
    res.status(200).json({
      success: true,
      message: 'No Books found',
      data: [],
    });
  }
});

const getSingBookById = asyncWrapper(async (req, res) => {
  const bookId = req.params.id;
  const getBookById = await Book.findById(bookId);
  if (!getBookById) {
    return res.status(404).json({
      success: false,
      message: 'Book with the ID not found, please try a different ID',
    });
  }
  res.status(200).json({
    success: true,
    message: 'Book fetched successfully',
    data: getBookById,
  });
});

const addNewBook = asyncWrapper(async (req, res) => {
  const { title, author, year } = req.body;
  const newBook = await Book.create({ title, author, year });
  res.status(201).json({
    success: true,
    message: 'Book added successfully',
    data: newBook,
  });
});

const updateSingleBookById = asyncWrapper(async (req, res) => {
  const bookId = req.params.id;
  const { title, author, year } = req.body;
  const updateBookById = await Book.findByIdAndUpdate(
    bookId,
    { title, author, year },
    { runValidators: true, new: true }
  );
  if (!updateBookById) {
    return res.status(404).json({
      success: false,
      message: 'Book with the ID not found, please try a different ID',
    });
  }
  res.status(200).json({
    success: true,
    message: 'Book updated successfully',
    data: updateBookById,
  });
});

const deleteBook = asyncWrapper(async (req, res) => {
  const bookId = req.params.id;
  const deleteBookById = await Book.findByIdAndDelete(bookId);
  if (!deleteBookById) {
    return res.status(404).json({
      success: false,
      message: 'Book with the ID not found, please try a different ID',
    });
  }
  res.status(200).json({
    success: true,
    message: 'Book deleted successfully',
    data: deleteBookById,
  });
});

module.exports = {
  getAllBooks,
  getSingBookById,
  addNewBook,
  updateSingleBookById,
  deleteBook,
};
