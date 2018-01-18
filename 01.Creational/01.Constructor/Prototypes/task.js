var Task = function (description){
    this.finished = false;
    this.description = description;
}

Task.prototype.toString = function(){
    console.log('Task : ' + this.description);
}

var myTask1 = new Task('Create a no prototype constructor creational patter');
var myTask2 = new Task('Create a prototype constructor creational patter');

myTask1.toString();
myTask2.toString();

// same function to all instances
// better performance
console.log(myTask1.toString === myTask2.toString);