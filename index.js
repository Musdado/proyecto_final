require('dotenv').config(); // To load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 9000;
const url = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const con = mongoose.connection;
app.use(express.json());

con.on('open', () => {
  console.log('MongoDB connection is open');
});

con.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// Define routes
const studentRouter = require('./routes/students');
app.use('/students', studentRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});



