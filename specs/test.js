// test.js

//require pageObjects
describe('A sample Google test', function() {
    //Initialize pageObjects
    beforeEach(function(){
        browser.get(baseUrl);
    });
    
    afterAll(function(){
        browser.quit();
    });

    it('should have a title', function(done) {
        element(by.id('lst-ib')).clear();
        element(by.id('lst-ib')).sendKeys('Seleniumhq');
        element(by.id('lst-ib')).sendKeys(protractor.Key.ENTER); 
        element(by.linkText('Selenium - Web Browser Automation')).click();
        expect(browser.getCurrentUrl()).toBe('http://www.seleniumhq.org/');
        done();
    });
});