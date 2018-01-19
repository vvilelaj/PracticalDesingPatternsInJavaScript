var Task = require('./task')
var User = require('./user')
var RepositoryFactory = require('./repository-factory')



var myTask1 = new Task('1.Create a no prototype constructor creational pattern demo');
var myTask2 = new Task('2.Create a prototype constructor creational pattern demo');
//
var myUser1 = new User('Victor Vilela');
var myUser2 = new User('Otro Usuario');

myTask1.toString();
myTask2.toString();
//
myUser1.toString();
myUser2.toString();

RepositoryFactory.getRepository('task').save(myTask1);
RepositoryFactory.getRepository('task').save(myTask2);

RepositoryFactory.getRepository('user').save(myUser1);
RepositoryFactory.getRepository('user').save(myUser2);

