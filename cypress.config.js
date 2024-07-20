const { defineConfig } = require("Cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config,
  {
    browsers: [
      {
        name: 'firefox',
        family: 'firefox',
        channel: 'stable',
        displayName: 'Firefox',
        version: execSync('firefox --version').toString().split(' ')[2],
        path: 'C:\\Program Files\\Mozilla Firefox\\firefox.exe', // Adjust this path based on your OS and Firefox installation path
        majorVersion: execSync('firefox --version').toString().split(' ')[2].split('.')[0],
        isHeaded: true,
        isHeadless: true
      }
    ]
  };
}

module.exports = defineConfig({
  projectId: "hcd7wb",
  //projectId: 'qigh5j',
  //"defaultCommandTimeout": 10000,
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/BDD/*.feature",
  },
});

