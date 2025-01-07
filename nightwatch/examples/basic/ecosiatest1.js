describe("Recording 1/5/2025 at 1:23:21 AM", function () {
it("tests Recording 1/5/2025 at 1:23:21 AM", function (browser) {
  browser.windowRect({width: 878, height: 695})
  .navigateTo("https://www.ecosia.org/")
  .click("[data-test-id='search-form-input']")
  .setValue("[data-test-id='search-form-input']", "nightwatch test 1")
  .click("[data-test-id='search-form-submit']")
  .click("html > body > #app > div > [data-test-id='layout-content'] > div > [data-test-id='mainline'] > div.mainline__content > div:nth-of-type(3) > [data-test-id='mainline-result-web'] div.result__title > [data-test-id='result-link']")
  .end();
  });
});
