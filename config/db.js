const mongoose = require('mongoose');
const config = require('config');
const db = 'mongodb://localhost:27017/testdb';
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB connected .... ');
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
module.exports = connectDB;
