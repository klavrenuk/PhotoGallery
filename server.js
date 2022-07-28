const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express(),
    bodyParser = require('body-parser'),
    port = 9000;

app.use(cors());
app.use(express.Router());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer({dest:__dirname+'/uploads'}).any());


process.on('uncaughtException', (err) => {
    console.error(err);
});

process.on('unhandledrejection', (err) => {
    console.error(err);
});


app.listen(port, (x1, x2) => {
    console.log(`Server running at http://localhost:${port}`);
})