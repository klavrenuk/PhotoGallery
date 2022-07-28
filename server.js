const express = require('express');
const cors = require('cors');
const app = express(),
    bodyParser = require('body-parser'),
    port = 3000;

app.use(cors());
app.use(express.Router());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require('./server/router')(app);

process.on('uncaughtException', (err) => {
    console.error(err);
});

process.on('unhandledrejection', (err) => {
    console.error(err);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})