const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    "uid": String,
    "name": String,
    "dob": String,
    "gender": String,
    "phone": String,
    "lat": Number,
    "lon": Number,
    "aadhar": String,
    "pan": String,
    "gst": String,
    "shop_name": String,
    "address": String,
    "bucket_link": String,
    "createdAt": String
});

var nodeModel = mongoose.model('Nodes', personSchema);

module.exports = nodeModel;