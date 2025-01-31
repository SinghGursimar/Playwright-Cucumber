1. npm init -y
2. npm install @cucumber/cucumber playwright chai @cucumber/html-formatter
3. npm install @playwright/test
4. cucumber-playwright-js/
│
├── features/
│   ├── example.feature        # Feature file
│   └── step-definitions/      # Step definition files
│       └── example.steps.js
│
├── support/
│   ├── hooks.js               # Hooks (e.g., before/after scenarios)
│   ├── playwright.config.js   # Playwright configuration
│
├── package.json
└── cucumber.js                # Cucumber configuration file
5.

