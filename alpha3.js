// 3.	Create a route that returns a JSON response containing your name and email.

const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.post('/myaction', (req, res) => {
    res.json({'Name': req.body.name, 'Email': req.body.email });
});

app.listen(3000, (req, res) => {
    console.log("Hello")
})