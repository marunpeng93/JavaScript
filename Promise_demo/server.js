var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static('node'));////把相对于“我”的目录a作为我们的web服务目录目录与服务器同级目录
app.all('*',(req,res,next) =>{
	res.header("Access-Control-Allow-Origin","*");
    next();
})

app.get("/", function(req, res){
	fs.readFile('posts.json', function (err,data) {
		if(!err){
			console.log(data.toString());
			res.send(data.toString());
		}
	})
	console.log("dafd")
	
});

app.listen(8088, function(){
	console.log("Server Start!");
});

