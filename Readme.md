`Khepri-Connector` will let you access easily with the Khepri technology
It ease the access of the ask / success / reset / dimensions method

In order to use: 

> npm install khepri-connector

Write a test File:

 
#!/usr/bin/node
"use strict";
var khepriObj = require('khepri-connector');


var urlKhepri = 'http://providedUrl.khepri';
var apiKey = 'thekeyprovided';
var instanceId = 4242;

khepriObj.init(urlKhepri, apiKey);

khepriObj.ask(instanceId, ["Zlatan", "Zidane"], [ 'Platini', 'Pogba'], false, function (answer) { console.log(answer); test = answer } );
 