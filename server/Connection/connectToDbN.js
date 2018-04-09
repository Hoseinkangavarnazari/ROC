var mongoose = require('mongoose');
var URL = 'mongodb://nroc:1122334455@ds135399.mlab.com:35399/roc';




var connection = mongoose.connect(URL);
var db = mongoose.connection;
mongoose.Promise = require('bluebird');

db.on('connected', function () {
    console.log('Mongoose connected to ' + URL);
});
db.on('error', function (err) {
    console.log('Mongoose connection error: ' + err);
});
db.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose disconnected through app termination');
        process.exit(0);
    });
});

module.exports = mongoose; 
