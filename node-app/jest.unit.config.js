const baseConfig = require('./jest.config');

module.exports = {
    // Taking previous Base Config
    ...baseConfig,
    // Extending Config for testing
    testRegex: "\\.unit.test\\.(js|ts)$",
    // we will have 100 test coverage 
    // if completed 100 or else will exit with error
    coverageThreshold: {
        global: {
          branches: 100,
          functions: 100,
          lines: 100,
        },
    },
}