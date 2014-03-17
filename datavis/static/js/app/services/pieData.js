// Pie Data Service
// ----------------------------------------------------------------------------
 
define([ 'app/services' ], function(services) {

  services.factory('pieDataService', function($http) {

    return {

      async: function() {

        return $http.get('pies').then(function(response) {

          console.log(response);
          return response.data;

        });

      }

    };

  });

});
