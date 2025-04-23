import { defineConfig } from 'cypress';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); 
      return config;

      // implement node event listeners here
     

    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
  },
});
