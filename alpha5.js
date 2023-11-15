// 5.	Set up a static file server to serve HTML, CSS, and JavaScript files.

const exp = require('express');
const path = require('path');

const app = exp();

app.use(exp.static(path.join(__dirname , 'alpha5')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'alpha5','alpha5.html'));
});

app.listen(3000, () => {
    console.log("Hello");
});