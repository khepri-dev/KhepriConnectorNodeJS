#!/usr/bin/node
"use strict";
var khepriObj = require('../lib/KhepriApi');



var urlKhepri = 'http://test-khepridevelba-1t8aalo9fz0t1-723475646.eu-west-1.elb.amazonaws.com';
var apiKey = '213e71dd6e9f354de2c42eee366d4263';
var instanceId = 3;


//var khepriTest = new khepriObj();
khepriObj.init(urlKhepri, apiKey);
//khepriTest.init(urlKhepri, apiKey);
var test = false;

khepriObj.ask(instanceId, ["Zlatan", "Zidane"], [ 'Platini', 'Pogba'], false, function (answer) { console.log(answer); test = answer } );




setTimeout(function() {
    if (test != false) {
        khepriObj.success(instanceId, test.solution, false, function (chk) { console.log('Result du success');console.log(chk); } );
    }
}, 500);


khepriObj.reset(instanceId,function (chk) { console.log('Result du reset');console.log(chk); } );
