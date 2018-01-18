function Task(description){
    this.finished = false;
    this.description = description;

    // drawback : 
    // a toString function is created in every new instance of Task.
    this.toString = function(){
        console.log('Task : ' + this.description);
    }
}

var myTask1 = new Task('Create a no prototype constructor creational patter');
var myTask2 = new Task('Create a prototype constructor creational patter');

myTask1.toString();
myTask2.toString();

console.log(myTask1.toString === myTask2.toString);