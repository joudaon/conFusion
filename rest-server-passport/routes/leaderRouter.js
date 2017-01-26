var express = require('express');
var bodyParser = require('body-parser');
//Require mongoose
var mongoose = require('mongoose');
//Require leadership model
var Leadership = require('../models/leadership');
//Requires verify class
var Verify = require('./verify');

var leaderRouter  = express.Router();

leaderRouter.use(bodyParser.json());

//Url ending: /   -> (leadership)
leaderRouter.route('/')

.get(function(req,res,next){
	Leadership.find({}, function (err, leadership) {
        if (err) next(err);
        res.json(leadership);
    });
})

.post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
	Leadership.create(req.body, function (err, leadership) {
        if (err) next(err);
        console.log('Leader created!');
        var id = leadership._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the leader with id: ' + id);
    });        
})

.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
    Leadership.remove({}, function (err, resp) {
        if (err) next(err);
        res.json(resp);
    });
});

//URL ending: /:leaderId
leaderRouter.route('/:leaderId')

.get(function(req,res,next){
    Leadership.findById(req.params.leaderId, function (err, leadership) {
        if (err) next(err);
        res.json(leadership);
    });
})

.put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
    Leadership.findByIdAndUpdate(req.params.leaderId, {
        $set: req.body
    }, {
        new: true
    }, function (err, leadership) {
        if (err) next(err);
        res.json(leadership);
    });
})

.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
    Leadership.findByIdAndRemove(req.params.leaderId, function (err, resp) {        
    	if (err) next(err);
    		res.json(resp);
    });
});

//Module export
module.exports=leaderRouter;