'use strict';

var runEnvironmentCommand = require('./run-environment-command');

module.exports = function(gulp, config) {
  return function(command, cb) {
    runEnvironmentCommand(command, config.server.environmentVariables, cb);
  };
};
