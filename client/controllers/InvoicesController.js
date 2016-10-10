var myApp = angular.module("myApp");

myApp.controller('InvoicesController', ['$scope'
    , function ($scope) {
        console.log('InvoicesController initialized');

        $scope.getInvoices = function() {
            $http.get('/api/invoices').success(function (response) {

            });
        }

    }
]);