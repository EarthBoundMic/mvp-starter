var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
//app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
app.use(express.static(__dirname + '/../angular-client'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('*', function(req, res) {
  res.sendFile('C:/Users/Michael/Desktop/HR/hrsf76-mvp-starter/angular-client/index.html');
})

app.get('/app', function (req, res) {
  
  console.log(req.body)
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
  res.send(items)
});

app.post('/app', function(req, res) {
  //console.log('hi')

  console.log(req.body)
  res.send(req.body);
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

