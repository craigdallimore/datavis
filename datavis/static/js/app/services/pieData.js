// Pie Data Service
// ----------------------------------------------------------------------------

define([ 'services' ], function(services) {

  // Transform primitive array into a complex array that angular can observe
  function complexify(arr) {

    return arr.map(function(val) {

      return { value: val };

    });

  }

  services.factory('pieDataService', function($http) {

    return {

      async: function() {

        return $http.get('pies').then(function(response) {

          return response.data.map(complexify);

        });

      }

    };

  });

});
