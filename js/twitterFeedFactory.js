politify.factory('TwitterFeed', ['$http', function($http) {
  var queryUrl = "http://www.theyworkforyou.com/api/getMP?postcode=";
  var key = "&key=CZog2vDXeZTXGfbksgA3L6hd";

  $twitterApi.getHomeTimeline({count: 5}).then(function(data) {
      console.log(data);
    }, function(error) {
      console.log('err: ' + error);
    });

  return {

    query: function(postcode) {
      return $http.get(
        queryUrl + postcode + key + "&output=js"
      );
    }
  };
}]);
