'use strict';
const libs = require('./lib')();
const main = require('./main');
// replaces ng-app="appName"
angular.element(document).ready(function () {
  angular.bootstrap(document, [main.name], {
    //strictDi: true
  });
});
