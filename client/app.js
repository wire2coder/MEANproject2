/*
* So,
* the way index.html is linked to Angular app is to put
* ng-app='appName' in index.html
* */

// angular-route

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider.when('/', {
        controller: 'DashboardController',
        templateUrl: 'views/dashboard.html'
    })
        // localhost:3000/#customers
        .when('/customers', {
            controller: 'CustomersController',
            templateUrl: 'views/customers.html'
        })

        .when('/customers/add', {
            controller: 'CustomersController',
            templateUrl: 'views/add_customer.html'
        })

        .when('/customers/:id1', {
            controller: 'CustomersController',
            templateUrl: 'views/customer_details.html'
        })

        .when('/customers/edit/:id1', {
            controller: 'CustomersController',
            templateUrl: 'views/edit_customer.html'
        })

        // /#invoices
        .when('/invoices', {
            controller: 'InvoicesController',
            templateUrl: 'views/invoices.html'
        })

        // /#invoices/add
        .when('/invoices/add', {
            controller: 'InvoicesController',
            templateUrl: 'views/add_invoice.html'
        })
        // /#invoices/get 1 invoice
        .when('/invoices/:id1', {
            controller: 'InvoicesController',
            templateUrl: 'views/invoice_details.html'
        })

        .when('/invoices/edit/:id1', {
            controller: 'InvoicesController',
            templateUrl: 'views/edit_invoice.html'
        })

    .otherwise({
        redirectTo: '/'
    });

}); // myApp