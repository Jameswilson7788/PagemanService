var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uuidv4 = require('uuid/v4');
var userSchema = new Schema({
  _id: uuidv4(),
  titile: {type:String,default:'無主題'},
  body: {type:String,default:'請輸入文字...'},
  owner: String,
  create: {type:Date,default:Date.now()},
  edit: {type:Date,default:Date.now()},
});

module.exports = mongoose.model('User', userSchema);