// Launch Controller
// ----------------------------------------------------------------------------

define([ 'app/controllers', 'app/services/pieData' ], function(controllers) {

  controllers.controller('LaunchController', ['$scope', 'pieDataService', function($scope, pieDataService) {

    console.log('Launch controller Loaded');

    pieDataService.async().then(function(data) {

      $scope.pieList = data;

    });

  }]);

});

