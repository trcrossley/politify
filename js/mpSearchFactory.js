politify.factory('MpSearch', ['$http', function($http) {
  var queryUrl = "http://www.theyworkforyou.com/api/getMP?constituency=";
  var key = "&key=CZog2vDXeZTXGfbksgA3L6hd"
  return {
    query: function(constituency) {
      return $http.get(
        queryUrl + constituency + key + "&output=js"
      );
    }
  };
}]);
