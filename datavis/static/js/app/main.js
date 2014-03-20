// Main
// ----------------------------------------------------------------------------

require([

  'angular',
  'app',
  'domready',
  'controllers/launch',
  'directives/pieChart',
  'directives/axisInput',
  'services/pieData',
  'routes',

  ], function(angular, datavis, domReady) {

  domReady(function() {

    angular.resumeBootstrap();

  });

});
