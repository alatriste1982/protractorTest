// config.js

//import module
 var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    onPrepare: function() {
        //Starting point for the tests

        //Enabled to test non angular apps. If set to false protractor waits for the Angular process to finish loading.
        browser.ignoreSynchronization = true;
        //Implicit wait set to handle non angular app loading times
        browser.manage().timeouts().implicitlyWait(10000);
        //browser.driver.manage().window().maximize(); doesn't work with firefox < 55 https://github.com/mozilla/geckodriver/issues/820
        //Setup of the test reporter
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({ 
            savePath: 'test-results',
            cleanDestination: false,
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true
        }));
    },

    //direct connect bypasses selenium server. Only works with Chrome currently: https://github.com/angular/protractor/issues/4253
    //directConnect: true,
    seleniumAddress: 'http://localhost:4444/wd/hub',

    //path to the tests
    specs: ['./specs/*.js'],

    //Browser configuration
    
    capabilities: {
        browserName: 'chrome',
        ignoreZoomSetting: true,
    },


    //USE FIREFOX 52
/*    capabilities: {
        browserName: 'firefox',
    },*/

    //Jasmine configuration
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
    }
}
