var express = require('express');
var bodyParser = require('body-parser');
//Require mongoose
var mongoose = require('mongoose');
//Require promotions model
var Promotions = require('../models/promotions');
//Require verify class
var Verify = require('./verify');

var promoRouter  = express.Router();

promoRouter.use(bodyParser.json());

//Url ending: /   -> (promotions)
promoRouter.route('/')

.get(Verify.verifyOrdinaryUser, function(req,res,next){
	Promotions.find({}, function (err, promotion) {
        if (err) throw err;
        res.json(promotion);
    });
})

.post(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
    Promotions.create(req.body, function (err, promotion) {
        if (err) throw err;
        console.log('Promotion created!');
        var id = promotion._id;

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Added the promotion with id: ' + id);
    });     
})

.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
    Promotions.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

//URL ending: /:promoId
promoRouter.route('/:promoId')

.get(Verify.verifyOrdinaryUser, function(req,res,next){
    Promotions.findById(req.params.promoId, function (err, promotion) {
        if (err) throw err;
        res.json(promotion);
    });
})

.put(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
    Promotions.findByIdAndUpdate(req.params.promoId, {
        $set: req.body
    }, {
        new: true
    }, function (err, promotion) {
        if (err) throw err;
        res.json(promotion);
    });
})

.delete(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next){
    Promotions.findByIdAndRemove(req.params.promoId, function (err, resp) {        
    	if (err) throw err;
    		res.json(resp);
    });
});

//Module export
module.exports=promoRouter;