// A page object that models seleniumHq's page
'use strict';

var seleniumHqPage = function(){
    var self = this;
    this.title = element(by.css('title'));

    this.getTitle = function(){
        return self.title.getAttribute('text');
    }
};
module.exports = seleniumHqPage;