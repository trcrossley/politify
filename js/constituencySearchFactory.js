politify.factory('ConsituencySearch', ['$http', function($http) {
  var queryURL = "https://api.postcodes.io/postcodes/";
  return {
    query: function(postcode) {
      return $http.get(
        queryURL + postcode
      );
    }
  };
}]);
