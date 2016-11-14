
var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/test',function(req,res){

    var options={
        host:"www.biquge.com",
        path:"/13_13453/7436033.html",
        //headers: {
        //    "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        //    "Accept-Encoding":"gzip, deflate, sdch, br",
        //    "Accept-Language":"zh-CN,zh;q=0.8",
        //    "Cache-Control":"max-age=0",
        //    "Connection":"keep-alive",
        //    "Upgrade-Insecure-Requests":1,
        //    "User-Agent:":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36"
        //}
    }

    http.get(options, function(ress) {
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
