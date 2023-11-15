// 8.	Develop a currency conversion application with the conversion rates stored in the backend database.

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());

mongoose
  .connect("mongodb+srv://roots:root@cluster0.qgrpqos.mongodb.net/")
  .then(() => {
    console.log("database connected successfully!");
  })
  .catch((err) => {
    console.err("error occured: ", err);
  });

const Rates = mongoose.model("Conversion", {
  code: String,
  rate: Number,
});

app.use(cors());

app.get('/', (req, res)=>{
  res.sendFile(__dirname+'/beta8-form.html');
})

app.post("/rate", (req, res) => {
  const { code } = req.body;
  Rates.findOne({ code })
    .then((rate) => {
      res.send(rate);
    })
    .catch((err) => {
      res.status(400).send("error occured");
      console.log("error occured: ", err);
    });
});

app.listen(6001, () => {
  console.log("server is running on http://localhost:6001");
});
app.listen(3000, () => {
  console.log("server is running on port 3000");
});