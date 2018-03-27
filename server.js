/**
 * server.js
 * main server file
 * */

/**
 * require modules
 * express: to run application
 * config: basic configuration of application
 * bodyparser: parse request body
 * mysql: connection with mysql database
 * */
const express = require("express"),
    config = require("./config/confing"),
    bodyparser = require("body-parser"),
    mysql = require("mysql"),
    app = express(),
    /** create connection properties */
    connection = mysql.createConnection({
        host: config.mysql.hostname,
        user: config.mysql.username,
        password: config.mysql.password,
        database: config.mysql.database
    });

app.use(bodyparser());
/** connect with database */
connection.connect();
/** set application port */
app.listen(config.port, () => {
    console.log(`magic start on port ${config.port}`);
});