// Axis Input Directive
// ----------------------------------------------------------------------------

define([ 'directives' ], function(directives) {

  directives.directive('axisInput', function() {

    console.log('direcive loaded');

    return {

      restrict : 'EA',
      replace  : true,
      scope    : { pieData : '=' },

      link : function(scope, el, attrs) {

        console.log('link');

      }

    };

  });

});
