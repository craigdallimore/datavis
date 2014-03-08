// Main
// ----------------------------------------------------------------------------

require([

  'angular',
  'app/app',
  'domready',
  'app/controllers/launch',
  'app/routes',

  ], function(angular, datavis, domReady) {

    //datavis.config([

      //'$routeProvider',
      //'$locationProvider', function($routeProvider, $locationProvider) {

      //// Index
      //$routeProvider.when('/', {

        //templateUrl: 'static/templates/launch.html',
        //controller:  'LaunchController'

      //});

      //$routeProvider.otherwise({ redirectTo: '/' });

    //}]);

  //return angular.module('datavis', [

    //'ngRoute',
    //'datavis.controllers'

  //]);
  domReady(function() {

    console.log('domready');
    angular.resumeBootstrap();
    //angular.bootstrap(document, ['datavis']);

  });

});
