const { exec } = require('child_process');

exports.config = {
    specs: [
        './test/features/**/*.feature' // Updated path for feature files
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'cucumber',
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './allure-results', // Directory for Allure results
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
            },
        ],
    ],
    cucumberOpts: {
        require: ['./test/step-definitions/*.js'], // Path to step definitions
        ignoreUndefinedDefinitions: false,
    //    tags: '@Negative2', // Run tests with these tags
    },
    onComplete: function () {
        exec('npx allure generate ./allure-results --clean', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error generating Allure report: ${error.message}`);
                return;
            }
            console.log('Allure report generated successfully!');
            exec('npx allure open ./allure-report');
        });
    },
};
