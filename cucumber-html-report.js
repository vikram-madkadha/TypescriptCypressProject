const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReport/",
  reportPath: "./cypress/cucumberReport/",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: "My cypress framework" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "May 05th 2025, 02:31 PM EST" },
      { label: "Execution End Time", value: "May 05th 2025, 02:56 PM EST" },
    ],
  },
});