// App
// ----------------------------------------------------------------------------

define([

  'angular',
  'app/controllers',
  'app/directives',
  'app/services',
  'angularRoute'

], function(angular) {

  return angular.module('datavis', [

    'controllers',
    'directives',
    'services',
    'ngRoute'

  ]);

});
