var http  = require('http');
var serverConf = {
	port: 90
}
console.log("Inciando el servidor");

var server = http.createServer(function(request, response){
	console.log("Petición recibida!! " + new Date());
	response.write("hello node");
	response.end(""+new Date());

});
console.log("Servidor iniciado. Presoince ctrl + c para salir");

server.listen(serverConf.port);