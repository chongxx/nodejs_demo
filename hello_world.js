// nodeJs hello world
// load http model
var http = require('http');
var fs = require('fs');
var counter = 0;
// write out numbers
function writeNumbers(res){
	
	// increment global, wirte to client
	for (var i = 0; i < 100; i++) {
		counter ++ ; 
		res.write(counter.toString()+'\n');
	}
}

// create http server
http.createServer(function(req,res) {
	var query = require('url').parse(req.url).query;
	// 获取请求中的file的参数
	var app = require('querystring').parse(query).file + '.txt';

	res.writeHead(200,{'content-Type':'text/plain'})
	writeNumbers(res);

	// timer to open file and read contents
	setTimeout(function(){
		console.log('open' + app);
		fs.readFile(app,'utf8',function(err,data){
			if (err) {
				res.write('open file error!!');
			}else{
				res.write(data);
			}

			res.end();


		})
	},2000);

}).listen(5000,function(){
	console.log('bound to port 5000');
});

console.log('http running on port 5000');
console.log(process.execPath);
console.log(process.platform);
