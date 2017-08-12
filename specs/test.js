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

    it('should have a title', function() {
        expect(browser.getTitle()).toEqual('Fail');
    });
});