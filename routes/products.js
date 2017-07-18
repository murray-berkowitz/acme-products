const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended:false});
const db = require('../db');

router.use(express.static('public'));

router.get('/', function(req,res){
	var products = db.highest();
	res.render('index', {products:products});
})


router.get('/products', function(req,res){
	var products = db.list();
	res.render('products', {products:products});
})

router.get('/products/:id', function(req,res){
	var id = Number(req.params.id);
	var product = db.find({id:id});
	res.render('product', {products:product});
})

router.post('/products', urlencodedParser, function(req,res,next){
	var product = req.body.product;
	var ranking = req.body.ranking;
	var photo = req.body.photo;
	db.add(product,ranking,photo);
	res.redirect('/products');
})

module.exports = router;