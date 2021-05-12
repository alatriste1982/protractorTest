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
    
    it('should navigate to the seleniumHQ page', function(done) {
        browser.get('http://www.google.com');
        googlePage.search('Seleniumhq');

        resultPage.getFirstResult();

        expect(seleniumhq.getTitle()).toEqual('SeleniumHQ Browser Automation');
        done();
    });
});