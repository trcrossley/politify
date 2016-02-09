politify.controller('PolitifyController', ['ConsituencySearch','MpSearch', function (ConsituencySearch, MpSearch) {

  var self = this;
  self.postcode = '';


  self.doSearch = function() {

    ConsituencySearch.query(self.postcode)
      .then(function(response) {
        self.constituencyResults = response.data.result;
        MpSearch.query(self.constituencyResults.parliamentary_constituency)
          .then(function(response) {
            self.mpResults = response.data;
            console.log(response);
          });
      });
  };

}]);
