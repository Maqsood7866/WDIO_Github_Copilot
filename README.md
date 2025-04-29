# Github Copilot Automation

This project is designed to automate testing using WebdriverIO with the Cucumber framework, following the Behavior Driven Development (BDD) approach.

## Project Structure

```
Github_Copilot_Automation
├── test
│   ├── feature
│   │   └── example.feature
│   ├── step-definition
│   │   └── example.steps.js
│   └── pageobject
│       └── example.page.js
├── package.json
├── wdio.conf.js
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd Github_Copilot_Automation
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the tests:**
   ```
   npx wdio run wdio.conf.js
   ```

## Usage Guidelines

- The `test/feature/example.feature` file contains the Gherkin syntax for defining feature scenarios.
- The `test/step-definition/example.steps.js` file maps the steps in the feature file to JavaScript functions.
- The `test/pageobject/example.page.js` file encapsulates the elements and actions related to a specific page in the application.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.