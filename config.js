// config.js

//import module
 var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    onPrepare: function() {
        //Starting point for the tests
        baseUrl = 'http://www.google.com/';

        //Enabled to test non angular apps. If set to false protractor waits for the Angular process to finish loading.
        browser.ignoreSynchronization = true;
        browser.driver.manage().window().maximize();

        //Setup of the test reporter
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            //consolidate: true,
            consolidateAll: true,
            savePath: './test-results/',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true
        }));
    },

    //direct connect bypasses selenium server
    directConnect: true,

    //path to the tests
    specs: ['./specs/*.js'],

    //Browser configuration
    capabilities: {
        browserName: 'chrome',
        ignoreZoomSetting: true,
    },

    //Jasmine configuration
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
    }
}
