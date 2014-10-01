var http  = require('http'), 
	fs = require('fs'),
	static=require('node-static'),
	colors=require('colors');

var serverConf = {
	port: 90
}


console.log("Inciando el servidor");
var file = new(static.Server)();
var server = http.createServer(function(req, res){

	console.log("--Petición".red);
	console.log("--Petición".green);
	file.serve(req,res);
}).listen(serverConf.port);
console.log("Servidor iniciado. Presoince ctrl + c para salir");
