var express = require('express');

var app = express();

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.use(express.static('public'));

app.get('/request_list', function(req, res){
  res.render('request_list', {time:Date(), title:'Jade'});
})

app.get('/travel_list', function(req, res){
  res.render('travel_list', {time:Date(), title:'Jade'});
})

app.get('/travel_info', function(req, res){
  res.render('travel_info', {time:Date(), title:'Jade'});
})

app.get('/travel_reg', function(req, res){
  res.render('travel_reg', {time:Date(), title:'Jade'});
})

app.get('/test', function(req, res){
  res.render('test', {time:Date(), title:'Jade'});
})

app.get('/request_reg', function(req, res){
  res.render('request_reg', {time:Date(), title:'Jade'});
})

app.get('/request_reg2', function(req, res){
  res.render('request_reg2', {time:Date(), title:'Jade'});
})

app.get('/', function(req, res){
    res.render('index', {time:Date(), title:'Jade'});
});

app.get('/travel_info', function(req, res){
    res.render('dealing', {time:Date(), title:'Jade'});
});

app.get('/dealing', function(req, res){
    res.render('dealing', {time:Date(), title:'Jade'});
});

app.get('/request_info', function(req, res){
    res.render('request_info', {time:Date(), title:'Jade'});
});

app.get('/dynamic', function(req, res){
  var lis = '';
  for(var i=0; i<5; i++){
    lis = lis + '<li>coding</li>';
  }
  var time = Date();
  var output = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
        Hello, Dynamic!
        <ul>
          ${lis}
        </ul>
        ${time}
    </body>
  </html>`;
  res.send(output);
});
app.get('/route', function(req, res){
    res.send('Hello Router, <img src="/route.png">')
})
app.get('/login', function(req, res){
    res.send('<h1>Login please</h1>');
});
app.listen(3002, function(){
    console.log('Conneted 3000 port!');
});
