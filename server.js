var http=require('http');
var {createServer}= require('http')
var server = http.createServer(function(req,res){
    res.write("Hello Taran");
    res.end();
});
server.listen(3000, () =>{  //callback
    console.log("Server started at port no. 3000")
})