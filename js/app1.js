var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl : 'Pages/home.html',
    controller  : 'mainController'
  })

  .when('/blog', {
    templateUrl : 'Pages/blog.html',
    controller  : 'BlogController'
  })

  .when('/about', {
    templateUrl : 'Pages/about.html',
    controller  : 'AboutController'
  })

  .otherwise({redirectTo: '/'});
});

app.controller('mainController', function($scope) {
  $scope.message = 'welcome to home page';
});

app.controller('BlogController', function($scope) {
  $scope.message = 'welcome to blog page';
});

app.controller('AboutController', function($scope) {
  $scope.message = 'You are on about page';
});
