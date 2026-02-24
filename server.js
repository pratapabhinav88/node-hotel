const express = require('express');  //importing express module
const app = express() //creating an instance of express application
const db = require('./db'); //importing database connection and operations
require('dotenv').config(); // Load environment variables from .env file


const bodyParser = require('body-parser'); // Importing body-parser middleware for parsing request bodies
app.use(bodyParser.json()); // Use body-parser middleware to parse JSON request bodies
const port = process.env.PORT || 3000; // Set the port number from environment variable or default to 3000

// To handle GET request for the home page
app.get('/', (req, res) => { 
  res.send('Welocome to my hotel..How I can help you?, we have list of menus')
})  
/*
app.get('/IDLI/DOSA', (req, res) => {
  res.send('Do you have South Indian Food?')
})

app.get('/Chicken', (req, res) => {
    var customized_chicken = {
        name: 'Chicken Biryani',
        Type: 'Hyderabadi',
        Quantity: '500gm',
        is_Gravy: true
    }
  res.send(customized_chicken)
})


// To handle POST request for placing an order
app.post('/items', (req, res) => {
    res.send('Your order is placed successfully')
})

// To handle PUT request for updating an order
app.put('/items/:id', (req, res) => {
    const itemId = req.params.id;
    res.send(`Order with ID ${itemId} has been updated successfully`)
})

// To handle DELETE request for canceling an order
app.delete('/items/:id', (req, res) => {
    const itemId = req.params.id;
    res.send(`Order with ID ${itemId} has been canceled successfully`)
})
*/

//Importing the PersonRoutes and using it for handling requests related to persons
const personRoutes = require('./routes/PersonRoutes');
app.use('/person', personRoutes); // Using the personRoutes for any requests that start with '/persons'

//Importing the MenuItemRoutes and using it for handling requests related to menu items
const menuItem = require('./routes/MenuItemsRoutes');
app.use('/menu', menuItem); // Using the menuItem for any requests that start with '/menu'

app.listen(3000,()=>{
    console.log('Listening on port 3000');
}) // Port Number
  




























































