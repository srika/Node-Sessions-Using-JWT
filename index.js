var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
global.config = require('./configurations/config');
var jwt = require('jsonwebtoken');
var User = require('./models/user');

// Connect to MongoDB
var options = {
    user: 'myTester',
    pass: 'xyz123',
    useNewUrlParser: true
}
mongoose.connect('mongodb://localhost:27017/demodb', options);
var db = mongoose.connection;

//Handle MongoDB Error
/* db.on('error', console.error.bind(console,'There is some error!'));
db.once('open', function(){
    console.log('We are connected!!');
}) */

app.use(bodyParser.json()); //because we are using restEasy
app.use(require('./controllers'));

app.get('/', function(req, res){
    res.send('Hello World!!!');
})

app.listen(3000, function(){
    console.log('Server is running at port 3000!!!');
})