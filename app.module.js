angular
  .module('surfApp', ['ngRoute']) //providing routing
  .config (function ($routeProvider) {  //configuring routes
    $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'CountyInfoController'
    })
    .when('/county', {
      templateUrl: 'templates/county.html',
      controller: 'CountyInfoController'
    });
  });
