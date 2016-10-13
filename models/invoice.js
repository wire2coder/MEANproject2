var mongoose = require('mongoose');

// Invoice Schema
var invoiceSchema = mongoose.Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer' // model name Customer
    },
    service: {
        type: String
    },
    price: {
        type: Number
    },
    due: {
        type: String
    },
    status: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

var Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;

// localhost:3000/api/invoices
// Get all invoices
module.exports.getInvoices = function (callback, limit) {
    // Mongoose command
    Invoice.find(callback).limit(limit).populate('customer');
};

// Get 1 invoice
module.exports.getInvoice = function (id1, callback) {
    var query = {_id: id1};

    // Mongoose command
    Invoice.findOne(query, callback).populate('customer');
};

// Add an invoice
module.exports.addInvoice = function (invoice, callback) {
    var add = {
        customer: invoice.customer_id,
        service: invoice.service,
        price: invoice.price,
        due: invoice.due,
        status: invoice.status
    };

    Invoice.create(add, callback);
};

// Update an invoice
module.exports.updateInvoice = function (id1, invoice, callback) {

    var update = {
        service: invoice.service,
        price: invoice.price,
        due: invoice.due,
        status: invoice.status
    };

    if (id1.match(/^[0-9a-fA-F{24}]$/)) {
        console.log('GOOD TO GO!');
    }

    console.log(id1);
    console.log(update);

    Invoice.findOneAndUpdate(id1, update, callback)
};

// Remove Invoice
module.exports.removeInvoice = function (id1, callback) {

    var query = {_id: id1};

    Invoice.remove(query, callback);
};

