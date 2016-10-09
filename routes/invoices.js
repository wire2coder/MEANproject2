var express = require('express');
var router = express.Router();

var Invoice = require('../models/invoice.js');

// localhost:3000/api/invoices
// Get all invoices
router.get('/', function (req, res) {
    Invoice.getInvoices((function (err, response) {
        if(err) {
            res.send(err);
        }

        res.json(response);
        console.log('Server: finding all invoices in the collection');
    }), 15); // database result limit
});

// Get 1 invoice
router.get('/:id1', function (req, res) {
    var id1 = req.params.id1;

    Invoice.getInvoice(id1, function (err, result) {
        if (err) {
            res.send(err);
        }

        res.json(result);
        console.log('Server: found 1 invoice');
    });
});

// Add an invoice
router.post('/', function (req, res) {
    var invoice = req.body;

    Invoice.addInvoice(invoice, function (err, result) {
        if(err) {
            res.send(err);
        }

        res.json(result);
        console.log('Server: an invoice was inserted');
    });
});

// Update an invoice
router.put('/update/:id1', function (req, res) {
    var id1 = req.params.id1;
    var invoice = req.body; // add Content-Type: application/json in the request header

    Invoice.updateInvoice(id1, invoice, function (err, result) {

        console.log(result);
        if (err) {
            res.send(err);
        }

        res.json(result);
        console.log('Server: an invoice was updated');
    });
});

HERE

module.exports = router;