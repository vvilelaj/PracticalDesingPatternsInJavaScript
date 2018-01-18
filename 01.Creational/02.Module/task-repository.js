var TaskRepository = function(){

    var _save = function(task){
        console.log('Saving task : ' + task.description);
    }

    return {
        save : _save
    }
}

module.exports = TaskRepository();