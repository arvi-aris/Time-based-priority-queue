/*
 * This module contains Queue implemenation 
 * Operations : insert,remove,peek,isEmpty
 * To use : create new instance using constructor
 * author     (Aravindh.N <aravindh.nagarajan@hotmail.com>)
 */
/*
 * Queue class
 */
var Queue = function(array){
	this.array = array;
	this.front;
	this.rear;
	this.limit = 500;
	this.formQueue();
};
/*
 * Sets front and rear
 */
Queue.prototype.formQueue = function(){
	this.front = 0;
	this.rear = this.array.length-1;
};
/*
 * Removes element from queue
 */
Queue.prototype.remove = function(){
	if(!this.isEmpty()){
		this.front++;
	}else{
		return false;
	}
}
/*
 * Inserts an element to Q.
 */
Queue.prototype.insert = function(elem){
	if(this.rear<this.limit){
		this.array.push(elem);
		this.rear++;
	}else{
		return false;
	}
}
/*
 * Gets first element without removing
 */
Queue.prototype.peek = function(){
	return this.array[this.front];
}
/*
 * Checks whether Q is empty 
 */
Queue.prototype.isEmpty = function(){
	if(this.front>this.rear) return true;
	else return false;
}

module.exports = Queue;