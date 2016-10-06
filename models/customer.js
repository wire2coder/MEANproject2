var mongoose = require('mongoose');

// Customer Schema
var customerSchema = mongoose.Schema({
    first_name: {
        type: String,
        requried: true
    },

    last_name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    }

}); // customerSchema

var Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;

// Get All customers
module.exports.getCustomers = function (callback, limit) {
    Customer.find(callback).limit(limit);
};

// Get a Single Customer
module.exports.getCustomerById = function (id, callback) {
    Customer.findById(id, callback);
};

// Add Customer
module.exports.addCustomer = function (customer, callback) {
    var add = {
        first_name: customer.first_name,
        last_name: customer.last_name,
        email: customer.email
    };

    Customer.create(add, callback);

};

// Update a Customer
module.exports.updateCustomer = function (id, customer, options, callback) {
    var query = {_id: id},
        update = {
            first_name: customer.first_name,
            last_name: customer.last_name,
            email: customer.email
        };

    Customer.findOneAndUpdate(query, update, options, callback);
};

// Remove Customer
module.exports.removeCustomerById = function (id, callback) {
    var query = {_id: id};
    Customer.remove(query, callback);
};
