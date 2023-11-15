// 6.	Use the Express.js framework to create a basic web application with routing.

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World!")
});

app.listen(3000, () => {
    console.log('Running on port 3000')
})