const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Replace with your MongoDB connection URL
const url = "mongodb+srv://aardilaclavijo:uZgE0VXVpDhhxpbt@cluster0.zcqvl2c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const con = mongoose.connection;
con.on('open', () => {
    console.log('Connected to the database');
});

con.on('error', (error) => {
    console.error('Error connecting to the database:', error);
});

const studentrouter = require("./students/routes/students");

app.use(express.json());
app.use('/students', studentrouter);

const port = 9000;
app.listen(port, () => {
    console.log('Server started on port ' + port);
});



