var Client = require('./client');

var myclient = new Client();
myclient.realizarAbono(100);
myclient.realizarAbono(100);
myclient.realizarAbono(100);
myclient.realizarAbono(100);
myclient.realizarCargo(20);
myclient.realizarCargo(20);
myclient.realizarCargo(20);
myclient.deshacerMovimiento();
