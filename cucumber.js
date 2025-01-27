module.exports = {
    default: {
      require: [
        'features/step-definitions/*.js',
        'support/hooks.js'
      ],
      format: ['html:reports/cucumber-report.html'],
      formatOptions: {
        colorsEnabled: false // Disable ANSI colors
      },
      timeout: 30000, // Set timeout to 30 seconds
      exit: true,
      tags: '@eg',
      parallel: 4
    }
  };
  