politify.controller('SuccessController', ['MpSearch', 'NewsSearch', 'Votes', function (MpSearch, NewsSearch, Votes) {
  var self = this;
  self.postcode = self.postcode || '';
  self.validate = false;

  self.doSearch = function() {
    if(self.postcode !== '') {
    MpSearch.query(self.postcode)
      .then(function(response) {
        self.mpResults = response.data;
        console.log(response);
        NewsSearch.query(self.mpResults.full_name)
          .then(function(response) {
            self.newsResults = response.data;
            console.log(response);
            Votes.query(self.mpResults.person_id)
              .then(function(response){
                self.votes = response.data;
                console.log(response);
                self.validate = true;
          });
          });
      });
    };
  };
}]);
