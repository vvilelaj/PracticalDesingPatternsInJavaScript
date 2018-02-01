//var NotificationService = require('./notification-service');
var Task = require('./task');
var LoggingService = require('./logging-service');
var AuditingService = require('./auditing-service');

var Mediator = require('./mediator');

var task1 = new Task({
    name: 'create a demo for constructor',
    user: 'Jon'
});

//var ns = new NotificationService();
var ls = new LoggingService();
var as = new AuditingService();

//Mediator.subscribe('complete',ns, ns.update);
Mediator.subscribe('complete',ls, ls.update);
Mediator.subscribe('complete',as, as.update);

task1.complete= function(){
    Mediator.publish('complete',this);
    Task.prototype.complete.call(this);
}
task1.complete();
task1.save();