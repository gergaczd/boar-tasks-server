'use strict';

module.exports = function(gulp, config) {
  var boarTasksCommon = require('boar-tasks-common');
  var lintTasks = boarTasksCommon.lint(gulp);

  return function() {
    return lintTasks.templates(config.server.templateCodeStylePattern);
  };
};