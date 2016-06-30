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


> \#!/usr/bin/node

> \# require khepri-connector package

> \# You need to install it with :

> \# npm install khepri-connector

> var khepriObj = require('khepri-connector');

> \# Setting you're khepri parameters

> \# Khepri URL (sandbox environment)

> var khepri_url ='http://sb.khepri.tech'

> \# Initialize the client with your  API-Key. You can find it on your Khepri account.
> var api_key = 'MY_APi_KEY'

> \# you can create your instance with your khepri account here we select the instance 1

> var instance_id = 1

> \# init 

> khepriObj.init(khepri_url, api_key);

> \# Simple ask

> khepriObj.ask(instanceId, function (answer) { console.log(answer);} );

> \# Simple success

> khepriObj.success(instanceId, answer.solution, function (chk) { console.log('Result du success');; });
