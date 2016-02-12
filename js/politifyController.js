
politify.controller('PolitifyController', ['MpSearch', 'NewsSearch', function (MpSearch, NewsSearch) {


  var self = this;
  self.postcode = '';


  self.doSearch = function() {

    MpSearch.query(self.postcode)
      .then(function(response) {
        self.mpResults = response.data;
        NewsSearch.query(self.mpResults.full_name)
          .then(function(response) {
            self.newsResults = response.data;
            console.log(response);

          });
      });
  };




}]);
