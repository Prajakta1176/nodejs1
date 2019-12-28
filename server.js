url=require("url");
http=require("http");

processdata=function(req,resp)
{
	console.log("in function");
	resp.end("hello");
}
http.createServer(processdata).listen(3000);
console.log("server is running on port 3000");