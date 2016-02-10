<<<<<<< HEAD
politify.controller('PolitifyController', ['MpSearch', function (MpSearch) {
=======
politify.controller('PolitifyController', ['ConstituencySearch', function (ConsituencySearch) {
>>>>>>> 239cf05264e91001d8e2aaf2ec9f38b0bfbb5008

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
