var myApp = angular.module('myApp', []);
myApp.controller('myController', ['$scope', function($scope) {
   //$scope.list = ['a', 'b', 'c'];
   $scope.list = [{ value: 'value 1' }, { value: 'value 2' }, { value: 'value 3' } ];
}]);

