const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
    'mongodb+srv://hanna:passwordsss@cluster0.0b10im5.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true
}).then(() => console.log("Database connected!"))
