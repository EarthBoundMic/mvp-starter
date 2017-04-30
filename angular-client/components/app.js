angular.module('app')
.controller('AppCtrl', function($scope, $http) {
  //a.getAll(function(b) {
    //console.log(b)
  //})
  
  $scope.operation = 'simplify';
  $scope.expression = '2+2';
  $scope.prevExpression = '';
  $scope.submit =function() {
    $scope.url = 'https://newton.now.sh/' + this.operation + '/' + this.expression
    console.log($scope.url);
    $scope.prevExpression = $scope.expression;
    $scope.expression = '';
    $http.get($scope.url)
    .then(function(data) {
      console.log(data.data.result)
      $scope.result = data.data.result;
      $http.post('/app', data)
  console.log($scope)
    });
    //$http.post('/app', $scope)
  }

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