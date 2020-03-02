//require the library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/todo_app_db');

//acquire the connection (to check if it is sucessful)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console, 'error connecting to db'));

//up and running then print the message
db.once('open', function(){
    console.log('Sucessfully connected to the database');
});