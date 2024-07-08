const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");


async function setupNodeEvents(on, config) {
await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));
return config;
}

module.exports = defineConfig({
  projectId: "hcd7wb",
  // projectId: 'qigh5j',
    // "defaultCommandTimeout": 10000,
e2e: {
setupNodeEvents,
specPattern: 'cypress/integration/BDD/*.feature',
},
});