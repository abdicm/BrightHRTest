const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280, // Set default width
    viewportHeight: 720,  // Set default height
    baseUrl: 'https://sandbox-app.brighthr.com/lite',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  // Set default viewport settings
  },
});
