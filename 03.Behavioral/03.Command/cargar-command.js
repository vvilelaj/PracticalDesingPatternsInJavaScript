var Command = require('./command');

var CargarCommand = function(cuentaBancaria, montoCargo){
    Command.call(this);
    this.cuentaBancaria = cuentaBancaria;
    this.montoCargo = montoCargo;
}
CargarCommand.prototype = Object.create(Command.prototype);
CargarCommand.prototype.execute = function(){  
    this.seEjecuto =  this.cuentaBancaria.cargar(this.montoCargo);
}
CargarCommand.prototype.undoExecute = function(){  
    if(this.seEjecuto){
        this.cuentaBancaria.abono(this.montoCargo);
        this.seEjecuto = false;
    }
}

module.exports = CargarCommand;