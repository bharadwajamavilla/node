// 7.	Create a custom 404 error page for handling undefined routes.

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/')));

app.get('/' , (req, res) => {
    res.send("Home page")
});

app.get('*',(req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'alpha7.html'))
});

app.listen(3000, () => {
    console.log("Running on port");
});