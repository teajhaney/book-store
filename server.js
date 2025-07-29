const env = {};
require('dotenv').config({ processEnv: env });
const express = require('express');
const PORT = env.PORT;
const app = express();

const connectDB = require('./database/connectMongoDB');

//connect to database
connectDB();

//middleware-> express.json()
app.use(express.json());

app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
