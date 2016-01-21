var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Ethan' });
});

router.get('/cat', function(req, res){
  var name = req.param('name', 'Ethan');
  res.render('cat', {title : 'Cat', name: name});
});


module.exports = router;
