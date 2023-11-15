// 2.	Develop the backend (Node Js, Express Js, MongoDB) for a CRUD application.

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 6001;

mongoose.connect("mongodb+srv://roots:root@cluster0.qgrpqos.mongodb.net/").then(()=>{
    console.log("Connected to database successfully");
}).catch(()=>{
    console.log("An error occured while connecting to the database : ",err);
});

app.use(express.json());

const Task = mongoose.model("Student_Data",{
    StudentName : String,
    Class : Number,
    Section : String
});

app.post('/create', (req, res)=>{
    const {StudentName, Class, Section} = req.body;
    const task = Task({StudentName, Class, Section});
    task.save().then(()=>{
        res.send("Log Created successfully");
        console.log("Log Created successfully");
    }).catch((err)=>{
        console.log("Error Occured : ",err);
    });
});

app.get('/tasks', (req, res)=>{
    Task.find().then((tasks) =>{
        res.send(tasks);
        console.log(tasks);
    }).catch((err) => {
        console.log("Error occured while getting all the documents");
    });
});

app.patch('/task/:id', (req, res)=>{
    const {id} = req.params;
    const {StudentName, Class, Section} = req.body;
    Task.findById(id).then((task) => {
        if ((StudentName) && (Section)){
            task.StudentName = StudentName;
            task.Section = Section;
        }
        if (toString(Class)){
            task.Class = Class;
        }
        task.save();
        res.send("Logs updated successfully");
    }).catch((err)=>{
        res.send("task not found");
        console.log("Error occured while updating the file ",err);
    });
});

app.delete('/delete/:id', (req, res)=>{
    const {id} = req.params;
    Task.findByIdAndDelete(id).then(() => {
        res.send("The log has been deleted");
    }).catch((err) => {
        console.log("An error occured while deleting the log ",err);
    });
});

app.listen(port, ()=>{
    console.log("The server is running on http://localhost:",port);
});