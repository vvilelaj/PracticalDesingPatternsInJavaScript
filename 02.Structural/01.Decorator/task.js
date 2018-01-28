// Simple Decorator Pattern

var Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log('Complete task : ' + this.name);
    this.completed = true;
}

Task.prototype.save = function(){
    console.log('Saving task : ' + this.name);
}

var myTask = new Task('Legacy task');
myTask.complete();
myTask.save();

// Adding decorators to one object instance
var myUrgentTask = new Task('Urgent task');
myUrgentTask.priotity = 2;
myUrgentTask.notify = function(){
    console.log('Notifying to important people ')
}
myUrgentTask.complete();
myUrgentTask.save = function(){
    this.notify();
    Task.prototype.save.call(this);
}
myUrgentTask.save();