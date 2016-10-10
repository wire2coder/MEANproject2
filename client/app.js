/*
* So,
* the way index.html is linked to Angular app is to put
* ng-app='appName' in index.html
* */

// angular-route

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    // localhost:3000/#customers
    $routeProvider
        .when('/customers', {
        controller: 'CustomersController',
        templateUrl: 'views/customers.html'
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

    .otherwise({
        redirectTo: '/'
    });

}); // myApp