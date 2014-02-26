// Configure app loading
// ----------------------------------------------------------------------------

require.config({

  baseUrl: '../static/js/',

  paths: {

    angular:        'libs/angular.min',
    angularRoute:   'libs/angular-route.min',
    angularAnimate: 'libs/angular-animate',
    jQuery:         'libs/jquery-1.11.0.min',

  },

  shim: {

    'angular':        { 'exports': 'angular' },
    'angularRoute':   ['angular'],
    'angularAnimate': ['angular']

  }

});

// http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require([ 'angular', 'app/main' ], function(angular, app) {

  angular.resumeBootstrap();

});

