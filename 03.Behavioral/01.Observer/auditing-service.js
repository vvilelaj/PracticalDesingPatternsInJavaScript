var AuditingService = function(){
    var message = 'Auditing ';
    this.update = function(task){
        console.log( message + task.user + ' for a task' + task.name);
    };
};

module.exports = AuditingService;