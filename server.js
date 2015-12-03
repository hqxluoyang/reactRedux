var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = new require('express')();
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
/*
app.use(function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
*/

app.get('/' , function(req , res){
  res.sendFile(__dirname + '/index.html');
})

app.get('/state' , function(req , res){
  var data = {
        code:'x',
        pic:'image',
        name:'react',
        count:'count',
        type:'电影',
        size:'888',
        time:'34',
        dt:'yui',
        scree:'1920'
  }
  console.log("getstate:")
  var json = JSON.stringify(data);
  res.write(json)
  res.end();
})

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});



