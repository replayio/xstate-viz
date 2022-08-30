import { defineConfig } from 'cypress'
const cypressReplay = require('@replayio/cypress')

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      cypressReplay.default(on, config);
      return config;
    },
    baseUrl: "http://localhost:3000",
    screenshotOnRunFailure: false,
    video: false,
    viewportWidth: 1280,
    viewportHeight: 800,
    defaultCommandTimeout: 15000,
    specPattern: 'cypress/integration/*spec.{js,ts}',
  },
})
