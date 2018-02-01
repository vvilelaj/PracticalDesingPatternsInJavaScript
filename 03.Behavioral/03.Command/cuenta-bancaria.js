var CuentaBancaria = function(montoInicial){
    this.montoInicial = montoInicial;
};
CuentaBancaria.prototype.cargar = function(cargo){
    var result = false;
    if(this.montoInicial>=cargo){
        this.montoInicial = this.montoInicial - cargo;
        this.mostrarMonto();
    }
    return result;
};
CuentaBancaria.prototype.abonar = function(abono){
    var result = false;
    if(abono > 0){
        this.montoInicial = this.montoInicial + abono;
        this.mostrarMonto();
    }
    return result;
};
CuentaBancaria.prototype.mostrarMonto =function(){
    console.log('Monto total : ' + this.montoInicial);
}

module.exports = CuentaBancaria;