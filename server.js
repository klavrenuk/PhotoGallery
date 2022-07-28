const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const app = express(),
    bodyParser = require('body-parser'),
    port = 9000;

app.use(cors());
app.use(express.Router());
app.use(express.json({extended: true}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

require('./server/router')(app);

process.on('uncaughtException', (err) => {
    console.error(err);
});

process.on('unhandledrejection', (err) => {
    console.error(err);
});


mongoose.connect('mongodb://localhost:27017/photoGallery',(err) => {
    if(err) {
        console.log('DataBase connection error');
        return false;
    }

    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    })
})