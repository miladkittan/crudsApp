const fs = require('fs');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const data = fs.readFileSync('db.json');
let users = JSON.parse(data);

app.use(express.static('public'));

// Create a route for handling create user requests
app.get('/createUser/:id/:name/:age/:city', (req, res) => {

    let newID = req.params.id;
    let newName = req.params.name;
    let newAge = parseInt(req.params.age);
    let newCity = req.params.city;

    users[newID] = {
        name: newName,
        age: newAge,
        city: newCity,
    };
    // Save and update JSON
    let dataToString = JSON.stringify(users);
    fs.writeFileSync('db.json', dataToString);

});

// Create a route for handling reading user requests
app.get('/readUser/:id', (req, res) => {

    let requestedID = req.params.id;
    // Send the users to the client
    res.json(users[requestedID]);

});

// Create a route for handling update user requests
app.get('/updateUser/:id/:name/:age/:city', (req, res) => {

    let newID = req.params.id;
    let newName = req.params.name;
    let newAge = parseInt(req.params.age);
    let newCity = req.params.city;

    users[newID] = {
        name: newName,
        age: newAge,
        city: newCity,
    };
    // Save and update JSON
    let dataToString = JSON.stringify(users);
    fs.writeFileSync('db.json', dataToString);

});

// Create a route for handling delete user requests
app.get('/deleteUser/:id', (req, res) => {

    let id = req.params.id;
    delete users[id];
    let dataToString = JSON.stringify(users);
    fs.writeFileSync('db.json', dataToString);

});

// Create a route for handling printing all users requests
app.get('/printAllUsers', (req, res) => {
    res.json(users);
});

// Start the Express server
app.listen(PORT, () => {
    console.log('Server listening on port 3000');
});
