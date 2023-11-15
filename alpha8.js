// 8.	Secure your routes with basic authentication using middleware.

const express = require('express');
const auth = require('express-basic-auth');

const app = express();

const authenticate = auth({
    users : {'root': 'root'},
challenge: true,
realm: 'Private Area'
});

app.get('/secure', authenticate, (req, res) => {
    res.send("Login success");
});

app.listen(3000, () => {
    console.log("Running")
})