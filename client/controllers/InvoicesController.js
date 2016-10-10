var myApp = angular.module("myApp");

myApp.controller('InvoicesController', ['$scope', '$http', '$location', '$routeParams'
    , function ($scope, $http, $location, $routeParams) {
        console.log('InvoicesController initialized');

        $scope.getInvoices = function () {
            $http.get('/api/invoices').success(function (response) {
                $scope.invoices = response;
            });
        };

        $scope.addInvoice = function () {
            $http.post('/api/invoices', $scope.invoicedata1).success(function (response) {
                console.log('InvoicesController: An invoice was added');
                window.location.href = '/#invoices';
            });
        };

        $scope.getCustomers = function () {
            $http.get('/api/customers').success(function (response) {
                $scope.customers = response;
            });
        };

    }
]);