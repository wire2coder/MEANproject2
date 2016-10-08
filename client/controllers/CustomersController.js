var myApp = angular.module("myApp");

// dependencies injection
myApp.controller('CustomersController', ['$scope', '$http', '$location', '$routeParams',
    // dependencies injection
    function($scope, $http, $location, $routeParams) {
        console.log('CustomersController initialized');

        $scope.getCustomers = function () {
            $http.get('/api/customers').success(function (response) {
                $scope.customers = response;
            });
        };

        $scope.getCustomerDetails = function (id1) {

        };

    }
]);