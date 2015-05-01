var express = require('express');
var mongojs = require('mongojs');
var db = mongojs('contacts',['contactlist']);

var app = express();

app.use(express.static(__dirname+"/public"));

app.get('/contactlist',function(req, res){
	console.log("i received a get request");
	db.contactlist.find(function(err, docs){
		console.log("docs");
		res.json(docs);
	});
});

app.listen(5000);
console.log("server running on port 5000");