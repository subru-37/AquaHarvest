const express = require("express");
const app = express();
const mongoose = require("mongoose");
const TankController = require("./controllers/tankController");
const FishController = require("./controllers/fishController");

mongoose.connect(
    'mongodb+srv://hanna:passwordsss@cluster0.0b10im5.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
}).then(() => console.log("Database connected!"))

app.use(express.json());
app.use(express.urlencoded({extended: true}));

TankController(app);
FishController(app);


app.listen(process.env.PORT||3000);
console.log('You are listening to port 3000');