import { defineConfig } from "cypress";

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  allureWriter(on, config);
  return config;
}

module.exports = defineConfig({
  e2e: {
    excludeSpecPattern: '*.js',
    specPattern: './**/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: './cypress/support/e2e.ts',
    fixturesFolder: './cypress/fixtures',
    defaultCommandTimeout: 10000,
    video: true,
    videoUploadOnPasses: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    pageLoadTimeout: 61000,
    taskTimeout: 61000,
    watchForFileChanges: false,
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    includeShadowDom: true,
    env: {
      localhost3001: "http://localhost:3001",
      localhost3002: "http://localhost:3002",
    },
    setupNodeEvents
  },
});
