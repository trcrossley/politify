politify.controller('PolitifyController', ['MpSearch', function (MpSearch) {

  var self = this;
  self.postcode = '';


  self.doSearch = function() {

    MpSearch.query(self.postcode)
      .then(function(response) {
        self.mpResults = response.data;
        console.log(response);
      });
  };

}]);
