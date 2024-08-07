const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: [
      'cypress/e2e/login/01_login.cy.js',
      'cypress/e2e/addNewEmployee/02_addNewEmployee.cy.js',
      'cypress/e2e/employeeList/03_employeeList.cy.js'
    ],
    viewportWidth: 1280,  // Set default width
    viewportHeight: 720,  // Set default height
    baseUrl: 'https://sandbox-app.brighthr.com/lite',
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    }
  },
});