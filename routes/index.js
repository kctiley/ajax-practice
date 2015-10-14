var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ajax-Practice with CRUD' });
});


/*
 * GET orderlist.
 */
router.get('/orders', function(req, res) {
    var db = req.db;
    var collection = db.get('orders');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

/*
 * POST to adduser.
 */
router.post('/orders', function(req, res) {
    var db = req.db;
    var collection = db.get('orders');
    collection.insert(req.body, function(err, result){
        res.send(
            (err === null) ? { msg: '' } : { msg: err }
        );
    });
});



module.exports = router;
