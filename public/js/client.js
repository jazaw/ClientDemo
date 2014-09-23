'use strict';

angular.module('ClientDemo', ['ngRoute', 'ClientDemo.Main', 'rx'])

.config(function ($routeProvider, $locationProvider) {
	$routeProvider
      .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'mainController'
      })
      .when('/min-side', {
        templateUrl: 'templates/min-side.html',
        controller: 'authenticatedController'
      })
      .otherwise({
        redirectTo: '/'
      });

	$locationProvider.html5Mode(false);
})

.controller('mainController', function($scope, $http, $location, mainModule, rx) {
	console.log('starting mainController');
	
	$scope.$createObservableFunction('login')
		.map(function () { 
			return {
				customerId: $scope.formData.customerId,
				password: $scope.formData.password
			}
		})
		.flatMapLatest(mainModule.login)
		.subscribe(function(data) {
			console.log("login complete");
			console.log(data);

			$scope.failingPassword = false;
			$location.path("/min-side");
		}, function (err) {
			console.log("login error");
			console.log(err);

			$scope.failingPassword = true;
		});
})

.controller('authenticatedController', function($scope, $http) {
	console.log('starting authenticatedController');

	$scope.balanceText = 'Loading...';

	$http.get('/balance')
		.success(function(data) {
			console.log("Success:");
			console.debug(data);
			$scope.balanceText = data.balance;
		})
		.error(function(err) {
			console.log('Error: ' + err);
			$scope.balanceText = 'Kunde ikke hente din balance.';
		});
});
