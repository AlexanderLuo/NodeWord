
var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/test',function(req,res){

    http.get("http://www.biquge.com/13_13453/7436033.html", function(ress) {
       var data=""
        ress.on('data', function (chunk) {
           data+=chunk;
        });
        ress.on('end', function(){

            var a=data.match(/<div id=\"content\">([\s\S]+?(<div[\s\S]+?<\/div>)*?[\s\S]+?)*?<\/div>/)

            res.send(a[0])
        });
    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    });



})


module.exports = router;
