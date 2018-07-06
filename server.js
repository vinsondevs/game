const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000
const studentRoutes = require('./routes/api/students');
//bodyparser middleware
app.use(bodyParser.json());

//db config
const db = require('./config/keys').mongoURI;

//database connect
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('Database connect'))
    .catch((err)=> console.log(err))

app.listen(port, ()=> console.log(`Server stated!! on ${port}`));

//use routes

app.use('/api/students', studentRoutes);
