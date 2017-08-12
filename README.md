## Synopsis
Automated test consisting of searching for 'Seleniumhq' in google and navigating to the seleniumHq page.

All three pages in the test flow are modeled in page objects (though usually there's a pageObject per each functionally significant element of the page), this provides the following benefits:
1. Test are clearer as the page objects provide a clear API that encapsulates functionality without exposing the underlying webdriver code needed to manipulate the UI
2. Code reusability: You can easily reuse the same page objects for different tests reducing code duplication
3. Maintainability: If there's a change in a part of the UI, only one pageObject has to be updated.

## Installation

1. Install nodeJs
2. Install protractor from the command line: npm install protractor -g
3. Download drivers : webdriver-manager update
4. Download dependencies (from repo root): npm install

## Test Execution
1. From the command line: protractor config.js

