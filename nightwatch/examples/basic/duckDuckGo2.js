describe("duckduckgo example", function () {
  it("Search Nightwatch.js and check results", function (browser) {
    browser
      .navigateTo("https://duckduckgo.com")
      .waitForElementVisible("input[name=q]")
      .assert.ok(
        browser.isVisible("input[name=q]"),
        "Search input field is visible"
      ) // Ensure the input field is visible
      .sendKeys("input[name=q]", ["Nightwatch.js"])
      .click('*[type="submit"]')
      .assert.ok(
        browser.isVisible("#react-layout"),
        "Search results layout is visible"
      ) // Ensure results layout is visible
      .assert.visible("#react-layout")
      .assert.textContains("#react-layout", "Nightwatch.js")
  });
});
