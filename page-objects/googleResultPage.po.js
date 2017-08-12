// A page object that models google's result page
'use strict';

var GoogleResultPage = function(){
    var self = this;
    
    //fix this
    this.getFirstResult = function(){
        element.all(by.css('.g')).first().click;
    };

    this.getResultByUrl = function(){

    }
    
    this.getResultByLinkText = function(linktext){
        element(by.linkText(linktext)).click();
    }
};
module.exports = GoogleResultPage;