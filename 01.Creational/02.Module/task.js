var TaskRepository = require('./task-repository');

var Task = function (description){
    this.finished = false;
    this.description = description;
}

Task.prototype.toString = function(){
    console.log('Task : ' + this.description);
}

Task.prototype.finish = function(){
    this.finished = true;
    console.log('Finishing ' + this.description);
    TaskRepository.save(this);
}

module.exports = Task;