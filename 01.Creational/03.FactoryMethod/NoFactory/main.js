var Task = require('./task')
var User = require('./user')
var TaskRepository  = require('./task-repository')
var UserResository  = require('./user-repository')


var myTask1 = new Task('Create a no prototype constructor creational patter');
var myTask2 = new Task('Create a prototype constructor creational patter');
//
var myUser1 = new User('Victor Vilela');
var myUser2 = new User('Otro Usuario');

myTask1.toString();
myTask2.toString();
//
myUser1.toString();
myUser2.toString();

TaskRepository().save(myTask1);
TaskRepository().save(myTask2);

