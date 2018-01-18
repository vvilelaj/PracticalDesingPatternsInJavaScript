var Task = require('./task')
//var Task = require('./task-repository')

var myTask1 = new Task('Create a no prototype constructor creational patter');
var myTask2 = new Task('Create a prototype constructor creational patter');

myTask1.toString();
console.log('finished : ' + myTask1.finished);
myTask1.finish();
console.log('finished : ' + myTask1.finished);