var Command = function(){
    this.seEjecuto = false;
};
Command.prototype.execute = function(){
};
Command.prototype.undoExecute = function(){
};

module.exports = Command;