angular.module('app')
.controller('AppCtrl', function($scope, $http) {
  //a.getAll(function(b) {
    //console.log(b)
  //})
  $scope.operation = 'simplify';
  $scope.expression = "";
  $scope.result = "";
  


})
.directive('app', function() {
  //console.log(this)
  return {
    scope: {},
    restrict: 'E',
    controller: 'AppCtrl',
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/app.html'
  };
});