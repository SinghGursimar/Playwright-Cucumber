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


Feature	Playwright	Selenium	Cypress
Video Recording	YES	NO	YES
Parallel Test Execution	YES	YES	NO (Only in Pro version)
Test Execution Speed	BEST	GOOD	GOOD
Locators / Selectors	Xpath, CSS, Text	Xpath, CSS, Text	Xpath, CSS, Text
Cloud Integration	YES	YES	YES
Multi-Language Support	YES	YES	Only JS / TS
Auto-Waits	YES	NO	YES
Tab / Popup Handling	YES	YES	NO
Cross-Domain Testing	YES	YES	NO
API Integration	YES	NO	YES
Test Runner	JUnit, TestNG, MOCHA, JASMINE, NUNIT	JUnit, TestNG, MOCHA, JASMINE, NUNIT	MOCHA
Open Source	YES	YES	YES
Headless Execution	YES	YES	YES
Reuse Auth State	YES	NO	NO
			


			


Playwright is faster in execution than Selenium
In Playwright you do not need to tell what kind of locator we are using.


Playwright architecture
Websocket protocol is faster than http
Playwright's parallelism is more efficient and lightweight compared to Selenium's grid-based approach.


Selenium 4
•	Uses the W3C WebDriver Protocol:
o	Selenium 4 now fully adheres to the W3C standard for WebDriver.
o	Communication is HTTP-based, requiring a browser driver (e.g., chromedriver, geckodriver) as an intermediary.
•	Architecture:
o	Test Script → Selenium API → WebDriver → Browser Driver → Browser.
Playwright
•	Uses the Playwright Protocol:
o	Playwright interacts directly with browsers without relying on an intermediary driver.
o	Leverages the Chrome DevTools Protocol (CDP) for Chromium-based browsers but extends support for WebKit and Firefox.
•	Architecture:
o	Test Script → Playwright API → Playwright Driver → Browser.
Key Difference: Playwright's direct communication with browsers makes it faster and allows access to advanced browser features like network interception, while Selenium depends on an additional driver layer.



Dev->>GitHub: Push code changes 
GitHub->>Actions: Trigger GitHub Actions 
Actions->>Runner: Start Playwright-CucumberJS tests 
Runner->>Runner: Execute test cases 
Runner->>qTest: Send test results via API POST request 
qTest-->>Runner: Acknowledge receipt
