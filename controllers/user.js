var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');

router.post('/signup',function(req, res){
    var user = new User({
        email: req.body.email,
        password: req.body.password
    });
    user.save(function(err,data){
        if(err){
            return res.json({'error':true});
        }
        res.json({'error':false});
    })
})

router.post('/authenticate',function(req, res){
    var user = {
        email: req.body.email,
        password: req.body.password
    };
    User.findOne(user).lean().exec(function(err, userDetail){
        if(err){
            return res.json({'error':true});
        }
        if(!userDetail){
            return res.status(404).json({'message':'User detail not found!'});
        }
        console.log(userDetail);
        var token = jwt.sign(userDetail, global.config.jwt_secret, {
            expiresIn: 1440 //1 hour
        })
        return res.json({'error':false,token:token});
    })
})

module.exports = router;