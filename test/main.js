#!/usr/bin/node
"use strict";
var khepriObj = require('../lib/KhepriApi');



var urlKhepri = 'xxxx';
var apiKey = 'xxx';
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
