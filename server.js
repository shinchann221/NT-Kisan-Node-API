const express = require('express');
const authApp = require('./init/firebaseinit');
const db = require('./init/initDB');
const minioClient = require('./init/minio');
//Routers
const api = require('./routes/router');

//Express Server Config
const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/', api);

var PORT = process.env.PORT || 5050;
var server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

module.exports = server;
