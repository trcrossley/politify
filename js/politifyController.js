politify.controller('PolitifyController', ['ConstituencySearch', function (ConsituencySearch) {

  var self = this;
  self.postcode = '';

  self.doSearch = function() {
    ConsituencySearch.query(self.postcode)
      .then(function(response) {
        self.constituencyResults = response.data.result;
        console.log(response);
      });
  };

}]);
