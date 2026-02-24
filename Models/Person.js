const mongoose = require('mongoose'); // Importing Mongoose library for MongoDB interactions

// Define the person schema
const personschema = new mongoose.Schema({
    name: {
        type: String,
        required: true          
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },

    is_married: {
        type: Boolean,
        required: true
    },
    hobbies: {
        type: [String],
        required: true
    }           
});

// Create a model based on the schema
const Person = mongoose.model('Person', personschema);
// Export the model for use in other parts of the application
module.exports = Person;


