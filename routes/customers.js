var express = require('express');
var router = express.Router();

Customer = require('../models/customer.js');

// localhost:3000/api/customers

// Get All Customers
router.get('/', function (req, res) {
    Customer.getCustomers(function(err, result) {
        if (err) {
            res.send(err);
        }

        res.json(result);
    }, 15); // database result limit
});

// Get Customer
router.get('/:id1', function (req, res) {
    var customerid = req.params.id1;

    Customer.getCustomerById(customerid, function (err, result) {
        if (err) {
            res.send(err);
        }

        res.json(result);
    });
});

// Add Customer
router.post('/', function (req, res) {
    var customer = req.body;

    Customer.addCustomer(customer, function (err, result) {
        if (err) {
            res.send(err);
        }

        res.json(result);
        console.log('Server: Customer inserted');
    });
});

// Update Customer
// localhost:3000/api/customers/id1
router.put('/:id1', function (req, res) {
    var customerid = req.params.id1;
    var customer = req.body;

    Customer.updateCustomer(customerid, customer, {}, function (err, result) {
        if (err) {
            res.send(err);
        }

        res.json(result);
        console.log('Server: Customer updated');
    });
});

// Delete Customer
router.delete('/:id1', function (req, res) {
    var customerid = req.params.id1;

    Customer.removeCustomerById(customerid, function (err, result) {
        if (err ) {
            res.send(err);
        }

        res.json(result);
        console.log('Server: Customer deleted');
    });
});

module.exports = router;