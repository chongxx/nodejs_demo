var http = require('http');
var url = require('url');
var route = require('./route');

http.createServer(function(request,response){
	response.writeHead(200, {'content-Type': 'text/html'});
	var pathname = url.parse(request.url).pathname;
	pathname = pathname.replace("/","");
	route.test(pathname,response);
	response.end();
}).listen(4000);

console.log('server is running!');