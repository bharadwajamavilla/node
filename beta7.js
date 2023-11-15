// 7.	Develop a simple authentication (login, register) app (both frontend and backend).

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb+srv://roots:root@cluster0.qgrpqos.mongodb.net/").then(()=>{
    console.log("Database connection has been extablished");
}).catch((err)=>{
    console.log("Error occured while database connection establishment");
});

const Employee = mongoose.model("LoginandRegistration",{
    Name: String,
    Password: String
});

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/beta7-register.html');
})

app.post('/register', (req, res)=>{
    const Name = req.body.name;
    const Password = req.body.password;
    const emp = new Employee({Name, Password});
    emp.save().then(()=>{
        console.log("Registeration has been successful");
        res.sendFile(__dirname+'/beta7-welcome.html')

    }).catch((err)=>{
        console.log("Error has occured while registering");
    });
});

app.post('/login', (req, res)=>{
    const Name = req.body.name;
    const Password = req.body.password;
    Employee.findOne({Name, Password}).then((employee) => {
        if(employee){
            console.log("Login Successful");
            res.sendFile(__dirname+'/beta7-welcome.html');
        }
    }).catch((err) => {
        console.log("Error occured while logging in");;
    });
});

app.listen(6001, ()=>{
    console.log("The server is running on http://localhost:6001");
})