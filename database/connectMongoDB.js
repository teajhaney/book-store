const env = {};
require('dotenv').config({ processEnv: env });
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect(env.mongooseSERVER);
    console.log('mondoDB connected sucessfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
