const express = require('express');
const router = express.Router(); // Creating a new router instance to handle routes related to persons
const Person = require('./../Models/Person');

// Post request to create a new person in the database
router.post('/', async (req, res) => {
    try {
        const { name, age, email, city, is_married, hobbies } = req.body; // Extracting data from request body
        const newPerson = new Person({ name, age, email, city, is_married, hobbies }); // Creating a new instance of the Person model with the extracted data
        const savedPerson = await newPerson.save(); // Saving the new person to the database
        res.status(201).json(savedPerson); // Sending a response with the saved person data and a 201 status code
    } catch (error) {
        console.log('Error creating person:', error); // Logging any errors that occur during the process
        res.status(500).json({ error: 'An error occurred while creating the person' }); // Sending a response with a 500 status code and an error message
    }
});

// Get request to retrieve all persons from the database
router.get('/', async (req, res) => {
    try {
        const people = await Person.find();
        res.status(200).json(people);
    } catch (error) {
        res.status(500).json({ error: "Error fetching data" });
    }
});

// Get request to retrieve persons by name from the database
router.get('/person', async (req, res) => {
    try {
        const { name } = req.query;

        if (name) {
            const person = await Person.find({ name });
            return res.json(person);
        }

        const allPersons = await Person.find();
        res.json(allPersons);

    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Extract the person's ID from the URL parameter
        const updatedPersonData = req.body; // Updated data for the person
        // Assuming you have a Person model
        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
                new: true, // Return the updated document
                runValidators: true, // Run Mongoose validation
            });
            
        if (!response) {
            return res.status(404).json({ error: 'Person not found'});
        }
        console.log('Person updated successfully'); // Log the updated person data
        // Send the updated person data as a JSON response
        res.status(200).json(response);
    } catch (error) {
        console.log('Error updating person:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete request to remove a person from the database
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id; // Extract the person's ID from the URL parameter
        const deletedPerson = await Person.findByIdAndDelete(personId); // Find the person by ID and delete them from the database
        if (!deletedPerson) {
            return res.status(404).json({ error: 'Person not found' }); // If the person is not found, return a 404 error
        }   
        console.log('Person deleted successfully'); // Log a success message
        res.status(200).json({ message: 'Person deleted successfully' }); // Send a success response
    } catch (error) {
        console.log('Error deleting person:', error); // Log any errors that occur during the process
        res.status(500).json({ error: 'Internal server error' }); // Send a 500 error response if an error occurs
    }
});

module.exports = router;