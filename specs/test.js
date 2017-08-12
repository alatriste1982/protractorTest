// test.js

//require pageObjects
var googleHomePage = require('../page-objects/googleHomePage.po');
var googleResultPage = require('../page-objects/googleResultPage.po');
var seleniumHqPage = require('../page-objects/seleniumHqPage.po');
describe('Navigate to seleniumHq page using google search engine', function() {
    //Initialize pageObjects
    var googlePage = new googleHomePage();
    var resultPage = new googleResultPage();
    var seleniumhq = new seleniumHqPage(); 

    beforeEach(function(){
        browser.get(baseUrl);
    });
    
    afterAll(function(){
        browser.quit();
    });

    it('should navigate to the seleniumHQ page', function(done) {
        googlePage.search('Seleniumhq');
        //resultPage.getFirstResult();
        resultPage.getResultByLinkText('Selenium - Web Browser Automation');
        expect(seleniumhq.getTitle()).toEqual(browser.getTitle());
        done();
    });
});