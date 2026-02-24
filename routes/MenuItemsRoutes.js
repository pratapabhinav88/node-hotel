const express = require('express');
const router = express.Router(); // Creating a new router instance to handle routes related to persons
const MenuItem = require('./../Models/Menu');

// Post request to create a new menu item in the database
router.post('/', async (req, res) => {
    try {
        const { name, price, category, is_vegetarian } = req.body; // Extracting data from request body
        const newMenuItem = new MenuItem({ name, price, category, is_vegetarian }); // Creating a new instance of the MenuItem model with the extracted data
        const savedMenuItem = await newMenuItem.save(); // Saving the new menu item to the database
        res.status(201).json(savedMenuItem); // Sending a response with the saved menu item data and a 201 status code
    } catch (error) {
        console.log('Error creating menu item:', error); // Logging any errors that occur during the process
        res.status(500).json({ error: 'An error occurred while creating the menu item' }); // Sending a response with a 500 status code and an error message
    }           
}); 

// Get request to retrieve all menu items from the database
router.get('/', async (req, res) => {
    try {
        const menuItems = await MenuItem.find();
        res.status(200).json(menuItems);
    } catch (error) {
        console.log('Error fetching menu items:', error); // Logging any errors that occur during the process
        res.status(500).json({ error: "Error fetching data" });
    }   
});

// Get request to retrieve menu items by category from the database
router.get('/category', async (req, res) => {
    try {
        const { category } = req.query;
        if (category) {
            const menuItems = await MenuItem.find({ category
            });
            return res.json(menuItems);
        }
        const allMenuItems = await MenuItem.find();
        res.json(allMenuItems);
    }
    catch (error) {
        console.log('Error fetching menu items by category:', error); // Logging any errors that occur during the process
        res.status(500).json({ error: 'Error fetching data' });
    }
});

// comment added for testing purpose
module.exports = router; // Exporting the router to be used in other parts of the application