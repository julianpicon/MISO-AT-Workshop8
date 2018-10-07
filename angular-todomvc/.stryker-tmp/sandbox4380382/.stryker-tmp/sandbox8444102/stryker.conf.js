module.exports = function(config) {
  config.set({
    mutator: "es5",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    testRunner: "karma",
    transpilers: [],
    testFramework: "jasmine",
    coverageAnalysis: "perTest",
    karma: {
      projectType: "custom",
      configFile: "test/config/karma.conf.js", //"karma.conf.js",
      config: {}
    },
    mutate: ["js/**/*.js"] //["src/**/*.js"]
  });
};
