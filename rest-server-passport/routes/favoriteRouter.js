var express = require('express');
var bodyParser = require('body-parser');
//Require mongoose
var mongoose = require('mongoose');
//Require leadership model
var Leadership = require('../models/leadership');
//Requires verify class
var Verify = require('./verify');