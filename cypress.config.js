const { defineConfig } = require('cypress')


module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://lead-hunter-sales-frontend-dev.azurewebsites.net/auth',
   
    retries: {
      runMode: 5, // (cypress run)
      openMode: 5, // (cypress open)
    },

  },
  fixturesFolder: false,
  video: false,
  
})