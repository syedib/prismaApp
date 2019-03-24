define(function () {

    var app = angular.module("webapp", ['ngRoute']);
  
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['webapp']);
    });
  
    return app;
});