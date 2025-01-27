module.exports = {
    use: {
        browserName: 'chromium',
        headless: false,
        screenshot : 'on',
        // Set the viewport to null for a maximized window
        viewport: null,
        launchOptions: 
         {
           args: ['--start-maximized'], // Maximizes the window on launch
         }
        },
    expect: {
        // assertion timeout 
        timeout: 5000
      },
  };
  