// Launch Controller
// ----------------------------------------------------------------------------

define([ 'controllers', 'services/pieData' ], function(controllers) {

  controllers.controller('LaunchController', ['$scope', 'pieDataService', function($scope, pieDataService) {

    pieDataService.async().then(function(data) {

      $scope.pieList = data;

    });

  }]);

});

