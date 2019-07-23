//require mongoose module
var mongoose = require("mongoose");

//require chalk module to give colors to console text
var chalk = require("chalk");

//require database URL from properties file
var dbURL = require("./properties").DB;

// setting of console text colors for different situations
var connected = chalk.bold.cyan;
var error = chalk.bold.yellow;
var disconnected = chalk.bold.red;
var termination = chalk.bold.magenta;

//export this function and imported by server.js
module.exports = () => {
    // Connect Mongoose with Database URL
    mongoose.connect(dbURL, { useNewUrlParser: true } );

    mongoose.set('useCreateIndex', true);

    // Connected Event
    // This event is fired when the connection is successfully connected.
    mongoose.connection.on("connected", () => {
        console.log(connected("Mongoose default connection is open to ", dbURL));
    });

    // Error Event
    // This event is fired when the connection gives some error.
    mongoose.connection.on("error", () => {
        console.log(error("Mongoose default connection has occured " + err + " error"));
    });

    // Disconnected Event
    // This event is fired when the connection is disconnected.
    mongoose.connection.on("disconnected", () => {
        console.log(disconnected("Mongoose default connection is disconnected"));
    });

    // Process End Event
    // This event is fired when the process is closed. 
    // When the process is closed, it is a good habit to close all 
    // the opened connection of database.
    process.on('SIGINT', () => {
        mongoose.connection.close(() => {
            console.log(termination("Mongoose default connection is disconnected due to application termination"));
            process.exit(0);
        });
    });
}
