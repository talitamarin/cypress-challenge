const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'rucvqm',
  e2e: {
    //defaultCommandTimeout: 5000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
