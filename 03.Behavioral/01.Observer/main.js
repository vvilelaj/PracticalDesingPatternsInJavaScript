var NotificationService = require('./notification-service');
var LoggingService = require('./logging-service');
var AuditingService = require('./auditing-service');

var ObservableTask = require('./observable-task')

var task1 = new ObservableTask({
    name: 'create a demo for constructor',
    user: 'Jon'
});

task1.addObserver(new NotificationService().update);
task1.addObserver(new LoggingService().update);
task1.addObserver(new AuditingService().update);

task1.save();