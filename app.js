(function () {
'use Strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

DIController.$inject = ['$scope', '$filter'];
function DIController ($scope, $filter) {
  $scope.name = "Sindhu";

  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };

}
})();
