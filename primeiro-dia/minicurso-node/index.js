// como module simples
//var incit = require('./incit.js')

// como POO
var Incit = require('./incit-object.js');
var incit = new Incit();

incit.abrirEmpresa('pando');
incit.abrirEmpresa('rzx');
incit.abrirEmpresa('ypoos');

incit.listarEmpresas();

incit.fecharEmpresa('ypoos');

incit.listarEmpresas();