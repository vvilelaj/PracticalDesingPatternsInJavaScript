var Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

Task.prototype.complete = function () {
    this.completed = true;
    console.log('completing task: ' + this.name);
};

Task.prototype.save = function () {
    console.log('saving Task: ' + this.name);
};

module.exports = Task;