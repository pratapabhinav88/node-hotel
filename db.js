const mongoose = require('mongoose'); // Importing Mongoose library for MongoDB interactions
require('dotenv').config(); // Load environment variables from .env file

// Define MongoDB connection URL
// const mongoURL = 'mongodb://localhost:27017/hotels'; // Replace with your MongoDB connection string
// const mongoURL = process.env.MONGODB_URL_LOCAL // Get MongoDB connection URL from environment variable
const mongoURL = process.env.MONGODB_URL; // Get MongoDB connection URL from environment variable

// Setup Connection to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/hotels")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("MongoDB connection error:", err));

// Get the default connection
// Mongoose maintain a default connection when connecting to MongoDB, you can access it through mongoose.connection 
const db = mongoose.connection;

// Define event listeners for the connection
db.on('error', console.error.bind(console, 'MongoDB connection error:')); // Log any connection errors

db.on('connected', function() {
    console.log('Connected to MongoDB successfully!'); // Log successful connection
});

db.on('disconnected', function() {
    console.log('MongoDB disconnected');
});

// Export the connection for use in other parts of the application
module.exports = db;










