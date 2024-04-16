const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://lead-hunter-sales-frontend-dev.azurewebsites.net',
  },
  fixturesFolder: false,
  video: false,
 
})

