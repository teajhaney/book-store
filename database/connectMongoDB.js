const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect(
      'mongodb+srv://teajhaney:yusfaith10@cluster0.vyrlzqt.mongodb.net/'
    );
    console.log('mondoDB connected sucessfully');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
