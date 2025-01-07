module.exports = {
  "@tags": ["ecoisa"],

  "Ecoisa Website Test with .ok()": function (browser) {
    // Open the Ecoisa website
    browser.url("https://www.ecosia.org/").waitForElementVisible("body", 1000);

    // // Assert the title of the page contains "Ecoisa"
    // browser.getTitle((title) => {
    //   browser.assert.ok(
    //     title.includes("Ecoisa"),
    //     'Page title contains "Ecoisa"'
    //   );
    // });

// artibute to chechk weather the word "like" present in the head of the page
    browser.getAttribute("heading", "class", (result) => {
      browser.assert.ok(
        result.value.includes("Like"),
        'The class contains the word "like".'
      );
    });


    // Assert the navigation menu is present
    browser.assert.elementPresent("nav", "Navigation menu is present");

    // Assert the "Get Started" button is visible (example button)
    browser.assert.visible(".btn-get-started", "Get Started button is visible");

    // Check a custom condition: footer contains "Contact Us"
    browser.getText("footer", (footerText) => {
      browser.assert.ok(
        footerText.includes("Contact Us"),
        'Footer contains "Contact Us"'
      );
    });

    // Assert a custom truthy condition
    const isPageSecure = browser.globals.pageLoadTime < 2000; // Example custom condition
    browser.assert.ok(isPageSecure, "Page loaded within acceptable time");

    // Close the browser
    browser.end();
  },
};
