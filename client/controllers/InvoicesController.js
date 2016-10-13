var myApp = angular.module("myApp");

myApp.controller('InvoicesController', ['$scope', '$http', '$location', '$routeParams'
    , function ($scope, $http, $location, $routeParams) {
        console.log('InvoicesController initialized');

        $scope.getInvoices = function () {
            $http.get('/api/invoices').success(function (response) {
                //console.log(response);
                $scope.invoices = response;
            });
        };

        $scope.getInvoice = function () {
            var id1 = $routeParams.id1;


            $http.get('/api/invoices/' + id1).success(function (response) {
                //console.log(response);
                $scope.invoicedata1 = response;
                $scope.customer_id1 = response.customer._id;
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

        $scope.updateInvoice = function () {

            $http.put('/api/invoices/update/' +
                $scope.invoicedata1._id, $scope.invoicedata1).success(
                function (response) {
                    //console.log(response);
                    window.location.href = '/#invoices';
                }
            );

        };

        $scope.removeInvoice = function(id1) {

            $http.delete('/api/invoices/' + id1).success(
                function () {
                    console.log('InvoicesController: an invoice was deleted');
                    window.location.href = '/#invoices';
                }
            );
        }

    }
]);