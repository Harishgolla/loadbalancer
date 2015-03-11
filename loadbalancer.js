
var http = require('http'),
httpProxy = require('http-proxy');
var servers =  ['http://127.0.0.1:9001', 'http://127.0.0.1:9002', 'http://127.0.0.1:9001'];

var proxy = httpProxy.createProxyServer();
var count = 0;
var currentServer = 1;

http.createServer(function(req,res){
  var cur = currentServer%servers.length;
    currentServer++;
    console.log('Redirecting to ' + servers[cur] + '--' + req.url);
    var target = servers[cur];
    //proxy.web(req, res, {
    //    target: target
    //});
  res.writeHead(301,{Location: target}) ;
  res.end();
  
}).listen(8000);


   
