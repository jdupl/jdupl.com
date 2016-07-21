var controllers = angular.module('app.controllers.Lang', []);

controllers.controller('Lang', function ($scope, Lang) {
  Lang.switchToLang('en');

  $scope.switchToLang = function (langStr) {
    Lang.switchToLang(langStr);
  };

  $scope.is = function (str) {
    return Lang.is(str);
  };
});
