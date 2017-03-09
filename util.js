/*
 * This file contains util methods.
 * author     (Aravindh.N <aravindh.nagarajan@hotmail.com>)
 */
var utils = {
	/*
	 * This method converts string to 2-D array.
	 */
	toArray : function(str){
		var d1 = str.replace(/\r\n/gi,',').split(',');
		var d2 = [];
		d1.splice(0,3);
		while(d1[0]){
			d2.push(d1.splice(0,3));
		}
		return d2;
	},
	/*
	 * Returns minutes and seconds from millisecond input
	 */
	millisToMinutesAndSeconds:function(millis) {
	  var minutes = Math.floor(millis / 60000);
	  var seconds = ((millis % 60000) / 1000).toFixed(0);
	  return minutes + " minutes and " + (seconds < 10 ? '0' : '') + seconds +" seconds";
	}
};
module.exports = utils;