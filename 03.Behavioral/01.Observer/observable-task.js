var ObserverList = require('./observer-list');
var Task = require('./task');

var ObservableTask = function(data){
    Task.call(this,data);
    this.observers = new ObserverList();
}

ObservableTask.prototype.addObserver = function(observer){
    this.observers.add(observer);
}

ObservableTask.prototype.notify = function(context){
    var observerCount = this.observers.count();
    for(i=0; i<observerCount; i++){
        this.observers.get(i)(context);
    }
}

ObservableTask.prototype.save = function(){
    this.notify(this);
    Task.prototype.save.call(this); 
}

module.exports = ObservableTask;