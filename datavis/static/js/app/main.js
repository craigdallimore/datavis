// Main
// ----------------------------------------------------------------------------

require([

  'angular',
  'app/app',
  'domready',
  'app/controllers/launch',
  'app/directives/pieChart',
  'app/services/pieData',
  'app/routes',

  ], function(angular, datavis, domReady) {

  domReady(function() {

    angular.resumeBootstrap();

  });

});
