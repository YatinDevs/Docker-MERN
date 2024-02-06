module.exports = {
    // Test Enviornment option : also can use jest (for web based)
    testEnvironment: "node",
    // modulePath - Entry point for app - looking any test file here
    modulePaths: ["<rootDir>/src"],
    // any thing which has .test.js .test.ts will be tested
    testRegex: "\\.test\\.(js|ts)$",
    //
    moduleFileExtensions: ["ts", "js", "json", "node"],
    // Any thing in node_modules or mocks will be ignored testing
    testPathIgnorePatterns: ["/_mocks_/", "/node_modules/"],
    // How much our code covered is tested
    coveragePathIgnorePatterns: ["/_mocks_/", "tests/"],
}