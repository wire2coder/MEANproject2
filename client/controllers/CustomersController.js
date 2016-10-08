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

        $scope.getCustomerDetails = function() {
            // id1 is coming from >> client/app.js >> URL
            var id1 = $routeParams.id1;

            $http.get('/api/customers/' + id1).success(function (response) {
                $scope.customer = response;
            });
        };

        $scope.updateCustomer = function() {
            HERE
        }

    }
]);