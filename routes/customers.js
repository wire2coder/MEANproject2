var express = require('express');
var router = express.Router();

// localhost:3000/api/customers
router.get('/', function (req, res) {
    res.json({'page name':'customers.js'});
});

module.exports = router;