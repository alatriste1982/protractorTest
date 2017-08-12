// test.js

//require pageObjects
var googleHomePage = require('../page-objects/googleHomePage.po');

describe('A sample Google test', function() {
    //Initialize pageObjects
    var googlePage = new googleHomePage();
    beforeEach(function(){
        browser.get(baseUrl);
    });
    
    afterAll(function(){
        browser.quit();
    });

    it('should have a title', function(done) {
        googlePage.search('Seleniumhq');
        expect(browser.getCurrentUrl()).toBe('http://www.seleniumhq.org/');
        done();
    });
});