// A page object that models google's result page
'use strict';

var GoogleResultPage = function(){
    var self = this;
    
    this.getFirstResult = function(){
        element.all(by.css('a[href*="https://www.selenium.dev/"]')).first().click();
    };

    this.getResultByLinkText = function(linktext){
        element(by.linkText(linktext)).click();
    };
};
module.exports = GoogleResultPage;