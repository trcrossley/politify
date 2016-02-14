politify.factory('NewsSearch', ['$http', function($http) {
  var queryUrl = "https://www.googleapis.com/customsearch/v1?";
  return {

    query: function(mpname) {
      return $http.get(
        queryUrl
      );
    }
  };
}]);
