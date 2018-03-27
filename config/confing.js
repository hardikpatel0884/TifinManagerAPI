/**
 * config/config.js
 * basic configuration file
 * */

module.exports = {
    /** port number to run application */
    port: process.env.PORT || 3000,

    /** mysql connection properties */
    mysql:{
        hostname:"localhost",
        database:"tifinmanager",
        username:"root",
        password:"Har884dik"
    }
};