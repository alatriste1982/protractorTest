## Synopsis
Automated test consisting of searching for 'Seleniumhq' in google and navigating to the seleniumHq page.

All three pages in the test flow are modeled in page objects (though usually there's a pageObject per each functionally significant element of the page), this provides the following benefits:
- Tests are clearer as the page objects provide a clear API that encapsulates functionality without exposing the underlying webdriver code needed to manipulate the UI
- Code reusability: You can easily reuse the same page objects for different tests reducing code duplication
- Maintainability: If there's a change in a part of the UI, only one pageObject has to be updated.

## Installation

1. Install nodeJs
2. Install protractor from the command line: npm install protractor -g
3. Download drivers : webdriver-manager update
4. Download dependencies (from repo root): npm install

## Test Execution
1. Start selenium server from command line: webdriver-manager start
2. From the command line run: protractor config.js

Config.js holds the following:
- Route to the specs to be executed
- Test reporter configuration
- Browser configuration
- Jasmine configuration

