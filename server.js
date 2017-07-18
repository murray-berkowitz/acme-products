const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = process.env.PORT || 3000;

const routes = require('./routes/products');

app.use('/', routes);
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache:true});


var server = app.listen(port, function(err,req,res){
	console.log('Listening on port ' + port);
});