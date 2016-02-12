politify.controller('SuccessController', ['MpSearch', 'NewsSearch', 'Votes', 'ResultsFactory', function (MpSearch, NewsSearch, Votes, ResultsFactory) {
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

  self.showResults = function() {
    self.mpName = ResultsFactory.mpName(self.mpResults);
    self.party = ResultsFactory.party(self.mpResults);
    self.constituency = ResultsFactory.constituency(self.mpResults);
    self.dept = ResultsFactory.dept(self.mpResults);
    self.image = ResultsFactory.image(self.mpResults);
    self.website = ResultsFactory.website(self.votes);
    self.expenses = ResultsFactory.expenses(self.votes);
    self.ex_rank = ResultsFactory.ex_rank(self.votes);
    self.ex_rank_total = ResultsFactory.ex_rank_total(self.votes);
    self.mp_id = ResultsFactory.mp_id(self.mpResults);
    self.mp_link_name = ResultsFactory.mp_link_name(self.mpResults);
    self.mpConstituency = ResultsFactory.mpConstituency(self.mpResults);
    self.totalExpenses = ResultsFactory.totalExpenses(self.votes);

  };


}]);
