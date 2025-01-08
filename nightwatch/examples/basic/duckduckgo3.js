describe("Assertion Examples Test Suite", function () {
  this.tags = ["assertions"];

  before((browser) => {
    // Navigate to a test page or setup initial state
    browser
      .navigateTo("http://localhost:3000/test") // Replace with your test page URL
      .waitForElementVisible("body");
  });

  it("should pass when asserting true value with .ok()", function (browser) {
    browser.assert
      .ok(true)
      // Add a custom message for better clarity
      .assert.ok(true, "Testing the value to be truthy");
  });

  it("should fail when asserting false value with .ok()", function (browser) {
    browser.assert.not
      .ok(false)
      // Test with a custom message showing expected vs actual
      .assert.not.ok(false, {
        message: "Testing falsy value",
        expected: "a truthy value",
        actual: false,
      });
  });

  it("should handle complex assertions with .ok()", function (browser) {
    const testValue = 42;

    browser// Test with number
    .assert
      .ok(testValue, "Number should be truthy")
      // Test with string
      .assert.ok("test string", "Non-empty string should be truthy")
      // Test with object
      .assert.ok({ key: "value" }, "Object should be truthy");
  });

  it("should correctly handle .not.ok() assertions", function (browser) {
    browser// Test basic false case
    .assert.not
      .ok(false, "False should not be truthy")
      // Test with null
      .assert.not.ok(null, "Null should not be truthy")
      // Test with undefined
      .assert.not.ok(undefined, "Undefined should not be truthy")
      // Test with empty string
      .assert.not.ok("", "Empty string should not be truthy");
  });

  it("should show proper error messages for failed assertions", function (browser) {
    browser// This assertion should fail with proper error message
    .assert
      .ok(false, {
        message: "Testing assertion error messages",
        expected: "a truthy value",
        actual: false,
      })
      // Test not.ok() with custom error message
      .assert.not.ok(true, {
        message: "Testing negative assertion error messages",
        expected: "a falsy value",
        actual: true,
      });
  });

  after((browser) => {
    browser.end();
  });
});
    
    // In the above example, we have a test suite with multiple test cases that demonstrate how to use the  .ok()  and  .not.ok()  assertions. We also show how to handle complex assertions and provide custom error messages. 
    // Run the test suite with the following command: 
    // nightwatch --tag assertions
    
    // The test suite will run and display the test results in the terminal. 
    // Conclusion 
    // In this guide, we covered the basics of assertions in Nightwatch.js and how to use them in your test scripts. We discussed the different assertion methods available in Nightwatch.js, such as  .ok() ,  .not.ok() ,  .equal() ,  .not.equal() , and  .containsText() . We also demonstrated how to use these assertions in test scripts and how to handle complex assertions with custom error messages. 
    // To learn more about assertions in Nightwatch.js, you can refer to the  official documentation. 
    // Join our DigitalOcean community of over a million developers for free! Get help and share knowledge in our Questions & Answers section, find tutorials and tools that will help you grow as a developer and scale your project or business, and subscribe to topics of interest. 
    // Nightwatch.js is an automated testing framework for web applications and websites. It uses the W3C WebDriver API to interact with web browsers and run end-to-end tests. Nightwatch.js provides a simple and easy-to-use syntax for writing test scripts and supports various assertion libraries for validating test results. 
    // In Nightwatch.js, assertions are used to validate the expected behavior of web applications and websites. Assertions are used to check if the actual results of a test match the expected results. Nightwatch.js provides various assertion methods, such as  .ok() ,  .not.ok() ,  .equal() ,  .not.equal() , and  .containsText() , to validate test results. 
    // How do you write assertions in Nightwatch.js? 
    // To write assertions in Nightwatch.js, you can use the built-in  assert  object provided by Nightwatch.js. The  assert  object provides various assertion methods, such as  .ok() ,  .not.ok() ,  .equal() ,  .not.equal() , and  .containsText() , to validate test results. You can use these assertion methods to check if the actual results of a test match the expected results. 
    // How do you run Nightwatch.js tests? 
    // To