#!/usr/bin/node
"use strict";
var khepriObj = require('../lib/KhepriApi');



var urlKhepri = 'http://test-khepridevelba-1t8aalo9fz0t1-723475646.eu-west-1.elb.amazonaws.com';
var apiKey = '213e71dd6e9f354de2c42eee366d4263';
var instanceId = 3;


//var khepriTest = new khepriObj();
khepriObj.init(urlKhepri, apiKey);
//khepriTest.init(urlKhepri, apiKey);

khepriObj.ask(instanceId);

