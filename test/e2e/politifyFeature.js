describe('Politify', function () {

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function () {
    expect(browser.getTitle()).toEqual('Politify');
  });

  it('returns results', function(){
    element(by.model('politifyCtrl.postcode')).sendKeys("se288sf");
    element(by.className('btn')).click();
    browser.driver.sleep(10000);
    expect(element(by.id('constituency')).getText()).toContain('Erith and Thamesmead');
  });
});
