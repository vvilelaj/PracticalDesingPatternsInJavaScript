var Command = require('./command');

var AbonarCommand = function(cuentaBancaria, montoAbono){
    Command.call(this);
    this.cuentaBancaria = cuentaBancaria;
    this.montoAbono = montoAbono;
}
AbonarCommand.prototype = Object.create(Command.prototype);
AbonarCommand.prototype.execute = function(){
    this.seEjecuto = this.cuentaBancaria.abonar(this.montoAbono);
}
AbonarCommand.prototype.undoExecute = function(){  
    if(this.seEjecuto){
        this.cuentaBancaria.cargar(this.montoCargo);
        this.seEjecuto = false;
    }
}

module.exports = AbonarCommand;