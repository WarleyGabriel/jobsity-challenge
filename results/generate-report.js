const reporter = require("cucumber-html-reporter");

const options = {
  theme: "bootstrap",
  jsonDir: "results/json",
  output: "results/report/index.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  ignoreBadJsonFile: true,
  metadata: {
    "App Name": "jobsity-challenge",
    "Test Environment": "QA",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};

reporter.generate(options);
