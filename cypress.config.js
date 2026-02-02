const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'k6b6e2',
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: false,
    json: true,
    charts: true,
    reportPageTitle: "PHPTravels - Cypress Automation Report"
  },

  e2e: {
    baseUrl: "https://app.phptravels.com",
    defaultCommandTimeout: 8000,

    setupNodeEvents(on, config) {
      // reservado para tasks futuras (ex: API, DB, Allure)
      return config;
    }
  }
});
