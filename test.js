var http = require('http');
var options = {
	host : '10.0.0.12',
	port : 5000,
	path :'/?file=secondary',
	method : 'GET'
};

var processPublicTimeLine = function(response){
	console.log('finished request');
};

for (var i = 0; i < 3000; i++){
	http.request(options,processPublicTimeLine).end()
}