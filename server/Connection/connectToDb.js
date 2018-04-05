var mongoose = require('mongoose');
var URL = 'mongodb://rocdb:roc12345@ds135399.mlab.com:35399/roc';

var options = {
    server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }
};


var connection = mongoose.connect(URL, options);
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
