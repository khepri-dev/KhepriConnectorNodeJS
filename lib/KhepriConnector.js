/**
 * Khepri Connector Api
 */


"use strict";


var khepriApi = function() {
	this.urlKhepri = false;
	this.apiKey = false;
	this.http = require('http');
}


khepriApi.prototype.init = function(url, key) {
    	this.urlKhepri = url;
    	this.apiKey = key;

    	
//    ask : function(instanceId, excludes, forcedSolutions, dimensions) {
//    	console.log(instanceId);
//    	console.log(excludes);
//    	console.log(forcedSolutions);
//    	console.log(dimensions);
//    }
}
console.log("on a bien loader le fichiers");
/*
 * 
 * 
     public static function ask($instanceId, $excludes = array(), $forcedSolutions = array(), $dimensions = array()){

            $url = self::$urlKhepri.'/api/ask.json?instance='.$instanceId.'&api_key='.self::$apiKey;

            if (is_array($excludes) && count($excludes) > 0) {
                array_walk($excludes, function(&$arg){ $arg = urlencode($arg);} );
                $excludeQueryString = implode(',', $excludes);
                $url .= '&exclude='.$excludeQueryString;
            }

            if (is_array($forcedSolutions) && count($forcedSolutions) > 0) {
                array_walk($forcedSolutions, function(&$arg){ $arg = urlencode($arg);} );
                $forcedSolutionsQueryString = implode(',', $forcedSolutions);
                $url .= '&forced_solutions='.$forcedSolutionsQueryString;
            }

            if (is_array($dimensions) && count($dimensions) > 0)
                $dimensionQueryString = http_build_query($dimensions);

            if ($dimensionQueryString != false)
                $url .= '&'.$dimensionQueryString;

            self::$curlParams[CURLOPT_URL] = $url;

            $back = self::launchRequest();

 * 
 */