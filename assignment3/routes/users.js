var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var Verify    = require('./verify');

router.route('/')
/* GET users listing. */
.get(Verify.verifyOrdinaryUser, Verify.verifyAdmin, function(req, res, next) {
	User.find({}, function (err, user) {
        if (err) throw err;
        res.json(user);
	});
})

//URL ending - /register
router.route('/register')
.post(function(req, res) {
    User.register(new User({ username : req.body.username }),
      req.body.password, function(err, user) {
        if (err) {
            return res.status(500).json({err: err});
        }
        passport.authenticate('local')(req, res, function () {
            return res.status(200).json({status: 'Registration Successful!'});
        });
    });
})

//URL ending - /login
router.route('/login')
.post(function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
        
      var token = Verify.getToken(user);
              res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: token
      });
    });
  })(req,res,next);
})

//URL ending logout
router.route('/logout')
.get(function(req, res) {
    req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});

module.exports = router;