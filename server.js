require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;
const app = express();

const connectDB = require('./database/connectMongoDB');
const bookRoutes = require('./routes/book-routes');

//connect to database
connectDB();

//middleware-> express.json()
app.use(express.json());

//book roues
app.use('/api/books', bookRoutes);

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
