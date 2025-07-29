const express = require('express');
const {
  getAllBooks,
  getSingBookById,
  addNewBook,
  updateSingleBook,
  deleteBook,
} = require('../controllers/book-controller');
//create express router
const router = express.Router();

//all route related to book
router.get('/get', getAllBooks);
router.get('/get/:id', getSingBookById);
router.post('/add', addNewBook);
router.put('/update/:id', updateSingleBook);
router.delete('/delete/:id', deleteBook);

module.exports = router;
