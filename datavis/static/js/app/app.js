// App
// ----------------------------------------------------------------------------

define([

  'angular',
  'app/controllers',
  'angularRoute'

], function(angular) {

  return angular.module('datavis', [

    'controllers',
    'ngRoute'

  ]);

});
