var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.locals.user = req.user || "";
	console.log(req.user);
	res.render('index', { title: 'Expressa' });
});

module.exports = router;
