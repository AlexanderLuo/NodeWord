
var express = require('express');
var router = express.Router();
var request = require('request');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/test',function(req,res){

    request('http://www.biquge.com/13_13453/7436033.html', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var a=body.match(/<div id=\"content\">([\s\S]+?(<div[\s\S]+?<\/div>)*?[\s\S]+?)*?<\/div>/)
            res.send(a[0])

        }
    })



})


module.exports = router;
