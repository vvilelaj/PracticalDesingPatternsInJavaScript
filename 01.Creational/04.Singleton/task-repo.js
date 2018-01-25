var Task = require('./Task');

var TaskRepo = (function(){
    var task;
    function createInstance(){
        return new Task();
    }

    return {
        getInstance: function(){
            if(!task)
                task = createInstance();
            
            return task;
        }
    }
})();

var taskInstance01 = TaskRepo.getInstance();
var taskInstance02 = TaskRepo.getInstance();

console.log(taskInstance01 === taskInstance02);