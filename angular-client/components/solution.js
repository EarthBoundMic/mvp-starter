angular.module('app')
.directive('result', function() {
  return {
    scope: {
      url: '<'
    },
    restrict: 'E',
    controller: function($scope, $http) {

        // console.log('ugh')
         console.log(this)
        // console.log()
         console.log(this.url)
        // this.url = 'https://newton.now.sh/' + this.operation + '/' + this.expression;
        //this.result = $http.post(this.url)
        // .then(function(data) {
        //   console.log(data)
        // })

      
    },
    controllerAs: 'ctrl',
    bindToController: true,
    templateUrl: '/templates/solution.html'
  };
});