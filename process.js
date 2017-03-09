/*
 *	This file contains main processing logic.
 *	author     (Aravindh.N <aravindh.nagarajan@hotmail.com>)
 */
var Queue = require('./queue.js');
var utils = require('./util.js');
/*
 * pss object containing queue execution procedures
 */
var pss = {
	/*
	 * Method to start execution
	 * param      {string} startTime - input start time 
	 * param      {data} <2-D array> File contents
	 */
	start:function(startTime,data){
		this.array = data;
		pss.timeBasedSort();
		pss.removeExpiredPss(startTime);
		this.queue = new Queue(this.processedArray);
		console.log("\nStarting at............. "+startTime);
		this.run(startTime);
	},
	/*
	 * Sort based on timestamp and priority
	 */
	timeBasedSort:function(){
		//Sorting time
		this.array.sort(function(a,b){ 
			a[2] = (parseInt(a[2])!==1)?0:a[2];
			b[2] = (parseInt(b[2])!==1)?0:b[2];
			var ms1 = new Date(a[1].trim()).getTime();
			var ms2 = new Date(b[1].trim()).getTime();
			return ms1-ms2;
		});
		//Sorting Priorities
		for(var i=0;i<this.array.length;i++){
			if(this.array[i+1] && (new Date(this.array[i][1].trim()).getTime()===new Date(this.array[i+1][1].trim()).getTime()) && (this.array[i][2]<this.array[i+1][2])){
				var temp = this.array[i+1];
				this.array[i+1] = this.array[i];
				this.array[i] = temp;
			}
		}
	},
	/*
	 * Runs each process
	 * param      {string} <initTime> { elapsed time }
	 */
	run:function(initTime){ 
		t1 = new Date(initTime).getTime();
		t2 = new Date(this.queue.peek()[1]).getTime();
		var diff =t2-t1;
		if ( diff )
			console.log("After " + utils.millisToMinutesAndSeconds(diff) + " ... ");
		console.log("Running process  : " + this.queue.peek())
		console.log("\n");
		this.next();
	},
	/*
	 * takes next process from Queue
	 */
	next:function(){
		var elapsedTime = this.queue.peek()[1];
		this.queue.remove();
		if(!this.queue.isEmpty()){
			this.run(elapsedTime)
		}else{
			this.end();
		}
	},
	/*
	 * invoked all processes from Queue got executed.
	 */
	end:function(){
		console.log("All tasks ended")
	},
	/*
	 * Removes expired processes from Queue
	 */
	removeExpiredPss:function(startTime){
		strt = new Date(startTime).getTime();
		this.processedArray = [];
		this.array.forEach(value => {
			var ms1 = new Date(value[1].trim()).getTime();
			if(ms1>strt){
				this.processedArray.push(value);
			}
		});
	}
};

module.exports = pss;