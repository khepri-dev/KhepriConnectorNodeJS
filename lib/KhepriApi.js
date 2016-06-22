/**
 * Khepri Connector Api
 */

//
"use strict";
//
//module.exports = new khepriApi();
module.exports = {
		
	/**
	 * @memberOf KhepriApi
	 */
	urlKhepri : false,
	apiKey : false,

	init : function(url, key) {
		console.log(this.urlKhepri+ '  '+ this.apiKey);
		this.urlKhepri = url;
		this.apiKey = key;
		
		console.log(this.urlKhepri+ '  '+ this.apiKey);
	},
	
	ask : function(instanceId, excludes, forcedSolutions, dimensions) {
	
	    	console.log(instanceId);
	    	console.log(this.urlKhepri+ '  '+ this.apiKey);
	    	console.log(excludes);
	    	console.log(forcedSolutions);
	    	console.log(dimensions);
	},
	
	success : function(instanceId, solutions, dimensions) {
		
	}

}
//console.log("on a bien loader le fichiers");
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