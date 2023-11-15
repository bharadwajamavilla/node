// 2.	Implement URL parameter routing to display specific content based on the URL.(Eg: ‘/’, ‘/home’, ‘/profile’, etc.,)

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("This is Root page");
});

app.get('/home', (req, res) =>{
    res.send("This is the home page");
})

app.get('/profile', (req, res) => {
    res.send("This is your Profile page");
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
})