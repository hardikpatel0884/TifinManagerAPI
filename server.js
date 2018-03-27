/**
 * server.js
 * main server file
 * */

const express = require("express"),
    config = require("./config/confing"),
    bodyparser = require("body-parser"),
    mysql = require("mysql"),
    app = express(),
    connection = mysql.createConnection({
        host: config.mysql.hostname,
        user: config.mysql.username,
        password: config.mysql.password,
        database: config.mysql.database
    });

app.use(bodyparser())
connection.connect();

app.listen(config.port, () => {
    console.log(`magic start on port ${config.port}`);
});