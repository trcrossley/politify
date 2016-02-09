describe('factory: MpSearch', function() {
  var mpSearch;

  beforeEach(module('Politify'));

  beforeEach(inject(function(MpSearch){
    mpSearch = MpSearch;
  }));

  beforeEach(inject(function($httpBackend){
    httpBackend = $httpBackend
    httpBackend
    .when('GET', "http://www.theyworkforyou.com/api/getMP?constituency=christchurch&key=CZog2vDXeZTXGfbksgA3L6hd&output=js")
    .respond(
      { items: items }
    );
  }));

  it('responds to query', function(){
    expect(mpSearch.query).toBeDefined();
  });
}
