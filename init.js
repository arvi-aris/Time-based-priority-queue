/*
 *	This file contains initiation steps
 *	author     (Aravindh.N <aravindh.nagarajan@hotmail.com>)
 */
var fileSystem = require('./fileSystem.js');
var pss= require('./process.js');
var utils = require('./util.js');
/*
 * Function to read contents
 * param      {string} path - {Path of the input file to be read}
 */
var readContents = function(path){
	fileSystem.readUtil(path,function(err,data){
		if(err){
			console.log(err);
			return;
		}else{
			init(data);
		}
	});
};
/*
 * Function that starts execution of the processes
 * param      {String} data - {data from input file}
 */
var init = function(data){
	var data = utils.toArray(data);
	var startTime = fileSystem.getStartTime();
	pss.start(startTime,data);
};

/* Gets file path*/
var path = fileSystem.getFilePath();
/* Reads content */
readContents(path);




