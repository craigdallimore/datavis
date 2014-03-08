// Routes
// ----------------------------------------------------------------------------

define(['angular', 'app/app'], function( angular, datavis ) {

  return datavis.config([

    '$routeProvider',
    '$locationProvider', function($routeProvider, $locationProvider) {

    // Index
    $routeProvider.when('/', {

      templateUrl: 'static/templates/launch.html',
      controller:  'LaunchController'

    });

    $routeProvider.otherwise({ redirectTo: '/' });

  }]);

});

