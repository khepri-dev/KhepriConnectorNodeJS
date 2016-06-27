`Khepri-Connector` will let you access easily with the Khepri technology
It ease the access of the ask / success / reset / dimensions method

In order to use: 

> npm install khepri-connector


Method Available
- init
- ask
- success
- reset


Write a test File:

 
`#!/usr/bin/node`
`"se strict";`
`var khepriObj = require('khepri-connector');`
`var urlKhepri = 'http://providedUrl.khepri';`
`var apiKey = 'thekeyprovided';`
`var instanceId = 4242;`
`var test = false;`

`khepriObj.init(urlKhepri, apiKey);`
`khepriObj.ask(instanceId, ["Zlatan", "Zidane"], [ 'Platini', 'Pogba'], false, function (answer) { console.log(answer); test = answer } );`
`# communicating a success`
`setTimeout(function() {`
`    if (test != false) {`
`        khepriObj.success(instanceId, test.solution, false, function (chk) { console.log('Result du success');console.log(chk); } );`
`    }`
`}, 500);`


`# reset the instance`
`khepriObj.reset(instanceId,function (chk) { console.log('Result du reset');console.log(chk); } );`

