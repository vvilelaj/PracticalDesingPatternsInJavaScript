var NotificationService = function(){
    var message = 'Notifying ';
    this.update = function(task){
        console.log( message + task.user + ' for a task' + task.name);
    };
};

module.exports = NotificationService;