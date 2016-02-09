describe('PolitifyController', function() {
  beforeEach(module('Politify'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('PolitifyController');
  }));

  it('initialises with an empty search result and term', function() {
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });
});
