/*
 * This module contains file accessing methods
 * author     (Aravindh.N <aravindh.nagarajan@hotmail.com>)
 */
const fs = require('fs');
var fileSystem = {
	/*
	 * Reads a file
	 * param      {string} <filePath> { path of the file }
	 * param      {function} <callback> { callback method }
	 */
	readUtil : function(filePath,callback){
		fs.readFile(filePath, 'utf8', callback);
	},
	/*
	 * Gets file path from cli input
	 */
	getFilePath : function(){
		return process.argv[process.argv.length-2];
	},
	/*
	 * Gets start time from cli input
	 */
	getStartTime : function(){
		var a;
		a = process.argv[process.argv.length-1].trim();
		return a;
	}
};

module.exports = fileSystem;