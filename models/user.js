//Load Mongoose to define a model class
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
/* var userSchema = mongoose.Schema({
    email: {
        type: String,
        unique:true,
        required:true
    },
    username: {
        type: String,
        unique:true,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    passwordConf: {
        type: String,
        required:true
    }
 }); */

 var User = module.exports = mongoose.model('User', new Schema({
     email: String,
     password:String
 })); //User - Model Name, userSchema - schema

 