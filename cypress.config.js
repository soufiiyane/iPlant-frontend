const { defineConfig } = require('cypress')

module.exports = defineConfig({
  fixturesFolder: false,
  reporter: 'cypress-sonarqube-reporter',
  reporterOptions: {
    outputDir: 'coverage',
    outputFile: 'cypress-report.xml',
    overwrite: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // If you're using code coverage
      require('@cypress/code-coverage/task')(on, config)
      
      // Your existing plugin setup
      const pluginConfig = require('./cypress/plugins/index.js')(on, config)
      
      return {
        ...pluginConfig,

      }
    },
    baseUrl: 'http://localhost:3000',
  },
})