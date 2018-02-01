var CuentaBancaria = require('./cuenta-bancaria');
var AbonarCommand = require('./abonar-command');
var CargarCommand = require('./cargar-command');

var Client = function(){
    this.contadorMovimientos = -1
    this.cuentaBancaria = new CuentaBancaria(0);
    this.commandList = [];
};
Client.prototype.realizarAbono = function(montoAbono){
    var cmd = new AbonarCommand(this.cuentaBancaria,montoAbono);
    this.commandList.push(cmd);
    cmd.execute();
    this.contadorMovimientos++;
}
Client.prototype.realizarCargo = function(montoCargo){
    var cmd = new CargarCommand(this.cuentaBancaria,montoCargo);
    this.commandList.push(cmd);
    cmd.execute();
    this.contadorMovimientos++;
}
Client.prototype.deshacerMovimiento = function(){
    var cmd = this.commandList[this.contadorMovimientos];
    cmd.undoExecute();
    this.contadorMovimientos--;
}

module.exports = Client;