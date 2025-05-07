const browserify = require("@cypress/browserify-preprocessor");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").default;

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
import { defineConfig } from 'cypress';

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on); 
  await addCucumberPreprocessorPlugin(on, config);
  on(
      "file:preprocessor",createBundler({
        plugins: [createEsbuildPlugin(config)],
}));
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
  }
export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    setupNodeEvents,
    specPattern: ['cypress/e2e/BDD/*.feature', 'cypress/e2e/*.cy.ts'],
    },
  });

   