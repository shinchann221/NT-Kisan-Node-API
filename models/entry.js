const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const entrySchema = new Schema({
  "uid": String,
  "user_name": String,
  "phone": Number,
  "status": String,
});

var entryModel = mongoose.model("User Entry", entrySchema);

module.exports = entryModel;