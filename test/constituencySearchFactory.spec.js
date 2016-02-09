describe('factory: ConstituencySearch', function(){
  var constituencySearch;

  beforeEach(module('Politify'));

  beforeEach(inject(function(ConstituencySearch, $httpBackend){
    constituencySearch = ConstituencySearch;
    httpBackend = $httpBackend;
    httpBackend
    .when("GET", "https://api.postcodes.io/postcodes/E16LT")
    .respond(
      {parliamentary_constituency: "Bethnal Green and Bow"}
    );
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('returns constituency for given postcode', function(){
    constituencySearch.query('E16LT')
    .then(function(response){
      expect(response.data.parliamentary_constituency).toEqual("Bethnal Green and Bow");
    });
    httpBackend.flush();

  });

});
