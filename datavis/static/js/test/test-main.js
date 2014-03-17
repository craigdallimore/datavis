// Test main
//
// Tell Require.js to load our tests, which must be done asynchronously
// as dependencies must be fetched before the tests are run.
// ----------------------------------------------------------------------------

var tests = [
];

for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({

  // Karma serves files from '/base'
  baseUrl: '/base',

  paths: {

    angular:        'libs/angular',
    angularRoute:   'libs/angular-route.min',
    angularAnimate: 'libs/angular-animate',
    jQuery:         'libs/jquery-1.11.0.min',
    d3:             'libs/d3',
    domready:       'libs/domReady'

  },

  shim: {

    'angular':        { 'exports': 'angular' },
    'angularRoute':   ['angular'],
    'angularAnimate': ['angular']

  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start

});
