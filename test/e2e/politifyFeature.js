describe('Politify', function () {

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function () {
    expect(browser.getTitle()).toEqual('Politify');
  });

  it('returns results', function(){
    element(by.model('politifyCtrl.doSearch')).sendKeys("se288sf");
    expect(element(by.className('results')).getText()).toEqual('Erith and Thamesmead');
  });
});
