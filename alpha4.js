// 4.	Implement a route that accepts POST requests and logs the request data to the console.

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/alpha4.html');
});

app.post('/submit', (req, res) => {
    console.log("Name: ", req.body.name);
    console.log("Email: ", req.body.email);
    res.send("Submit success");
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});