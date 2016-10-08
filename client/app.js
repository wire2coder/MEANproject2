/*
* So,
* the way index.html is linked to Angular app is to put
* ng-app='appName' in index.html
* */

// angular-route

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    // localhost:3000/#customers
    $routeProvider.when('/customers', {
        controller: 'CustomersController',
        templateUrl: 'views/customers.html'
    })

    .otherwise({
        redirectTo: '/'
    });

}); // myApp