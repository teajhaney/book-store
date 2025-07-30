const express = require('express');
const {
  getAllBooks,
  getSingBookById,
  addNewBook,
  updateSingleBookById,
  deleteBook,
} = require('../controllers/book-controller');
//create express router
const router = express.Router();
const app = express();

app.use(express.json());

//all route related to book
router.get('/get', getAllBooks);
router.get('/get/:id', getSingBookById);
router.post('/add', addNewBook);
router.put('/update/:id', updateSingleBookById);
router.delete('/delete/:id', deleteBook);

module.exports = router;
