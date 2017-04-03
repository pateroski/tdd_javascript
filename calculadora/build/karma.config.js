//'use strict';

var baseDir = 'app';

module.exports = {

  //This is the list of file patterns to load into the browser during testing.
  //TODO if you install a new  bower component with bower you have to write the new dependency below
  files: [
    baseDir + '/modules/**/*.js',
    'build/tmp/*.js',
    baseDir + '/modules/**/*-spec.js',
    baseDir + '/test/*_[Ss]pec.js',
    baseDir + '/test/*_[Ss]pec.js'
  ],

  //used framework
  frameworks: ['jasmine'],

  plugins: [
    'karma-chrome-launcher',
    'karma-phantomjs-launcher',
    'karma-jasmine',
    'karma-coverage',
    'karma-html-reporter',
    'karma-mocha-reporter'
  ],

  preprocessors: {
    'app/**/*.js': 'coverage'
  },

  reporters: ['mocha', 'html', 'coverage'],

  coverageReporter: {
    type: 'html',
    dir: baseDir + '/test/unit-results/coverage',
    file: 'coverage.html'
  },

  htmlReporter: {
    outputDir: baseDir + '/test/unit-results/html'
  },

  logLevel: 'info',

  urlRoot: '/__test/',

  //used browsers (overriddeng in some gulp task)
  browsers: ['Chrome'],
};
