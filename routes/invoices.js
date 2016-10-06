var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.json({'page name': 'invoices.js'});
});

module.exports = router;