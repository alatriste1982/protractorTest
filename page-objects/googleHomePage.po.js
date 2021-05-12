// A page object that models google's home page
'use strict';

var GoogleHomePage = function(){
    var self = this;
    this.searchField = element(by.name('q'));

    this.search = function(searchTerm){
        self.searchField.clear();
        self.searchField.sendKeys(searchTerm);
        self.searchField.sendKeys(protractor.Key.ENTER);
    };
};
module.exports = GoogleHomePage;