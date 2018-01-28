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

var UrgentTask = function(name,priority){
    Task.call(this,name);
    this.priority = priority;
}

UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function(){
    console.log('Notifying to important people ');
}

UrgentTask.prototype.save = function(){
    this.notify();
    Task.prototype.save.call(this);
}

var urgentTask = new UrgentTask('Urgent task',2);
urgentTask.complete();
urgentTask.save();

var task = new Task('Simple Task');