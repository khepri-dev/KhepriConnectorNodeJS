/**
 * Khepri Connector Api
 */

//
"use strict";

const url = require('url');
var http = require('http');


module.exports = {

    urlKhepri : false,
    apiKey : false,
    lastAnswer : false,
    init : function(url, key) {
        this.urlKhepri = url;
        this.apiKey = key;
    },


    ask : function(instanceId, callback, excludes, forcedSolutions, dimensions) {
        var optionnalArgs = '';
        var excludeQs = '';
        var forcedSolutionsQs = '';
        var dimensionsQs = '';

        if (typeof (excludes) == 'object' && excludes.length > 0) {
            optionnalArgs = 'exclude=' + encodeURI(excludes.join());
        }
        if (typeof (forcedSolutions) == 'object' && forcedSolutions.length > 0) {
            if (optionnalArgs != '')
                optionnalArgs = optionnalArgs + '&'
            optionnalArgs = optionnalArgs + 'forced_solutions=' + encodeURI(forcedSolutions.join());
        }

        var options = {
            host: url.parse(this.urlKhepri).host,
            path: '/api/ask.json?api_key=' + this.apiKey + '&instance=' + instanceId + optionnalArgs

        };

        try {
            http.get(options, function (response) { // Continuously update stream with data
                var body = '';
                response.on('error', function (err) {
                    // Handle error
                });
                response.on('data', function (d) {
                    body += d;
                });
                response.on('end', function () { // Data reception is done, do whatever with it!
                    try {
                        var parsed = JSON.parse(body);
                        this.lastAnswer = parsed;
                        callback(parsed);
                    } catch (error) { /* handle error */ }
                });
            });
        } catch (error) {console.log('cannot connect to khepri')}
        return this;
    },

    success : function(instanceId, solutions, callback, dimensions) {
        var options = {
            host: url.parse(this.urlKhepri).host,
            path: '/api/success.json?api_key=' + this.apiKey + '&instance=' + instanceId +  '&solution=' + solutions

        };
        var chk = http.get(options, function(response) { // Continuously update stream with data
            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() { // Data reception is done, do whatever with it!
                try {
                    var parsed = JSON.parse(body);
                } catch (error) { /* handle error */ }

                callback(parsed);
            });
        });
        return this;
    },

    reset : function (instanceId, callback) {
        var options = {
            host: url.parse(this.urlKhepri).host,
            path: '/api/reset.json?api_key=' + this.apiKey + '&instance=' + instanceId

        };
        var chk = http.get(options, function(response) { // Continuously update stream with data
            var body = '';
            response.on('data', function(d) {
                body += d;
            });
            response.on('end', function() { // Data reception is done, do whatever with it!
                try {
                    var parsed = JSON.parse(body);
                } catch (error) { /* handle error */ }

                callback(parsed);
            });
        });
        return this;
    }

}