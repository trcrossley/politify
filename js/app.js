var politify = angular.module('Politify',
['ngResource', 'ui.router', 'firebase', 'ngMaterial', 'ngMessages', 'ngMdIcons'])
.constant('FIREBASE_URL', 'https://politify.firebaseio.com/');

politify.run(['$rootScope', '$location',
  function($rootScope, $location) {
    $rootScope.$on('$routeChangeError',
      function(event, next, previous, error) {
        if (error=='AUTH_REQUIRED') {
          $rootScope.message = 'Sorry, you must log in to access that page';
          $location.path('/login');
        } // AUTH REQUIRED
      }); //event info
  }]); //run

politify.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state("home", {
        url: "/home",
        controller: "HomeCtrl",
        templateUrl: "views/home.html"
    });
    $stateProvider.state("login", {
        url: "/login",
        controller: "RegistrationController",
        templateUrl: "views/login.html"
    });
    $stateProvider.state("register", {
        url: "/register",
        controller: "RegistrationController",
        templateUrl: "views/register.html"
    });
    $stateProvider.state("success", {
        url: "/success",
        controller: "SuccessController",
        templateUrl: "views/success.html",
        resolve: {
          currentAuth: function(Authentication) {
            return Authentication.requireAuth();
          }
        }
    });
});

politify.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue', {
          'default': '400', // by default use shade 400 from the cyan palette for primary intentions
          'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
          'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
          'hue-3': 'A400' // use shade A100 for the <code>md-hue-3</code> class
      })
      .accentPalette('amber')
      .warnPalette('red')
      .backgroundPalette('grey');
});

politify.config(function($mdIconProvider) {
    $mdIconProvider
      .iconSet('social', 'bower_components/material-design-icons/sprites/svg-sprite/svg-sprite-social.svg', 24)
      .defaultIconSet('img/icons/sets/core-icons.svg', 24);
});

politify.directive('styleParent', function() {
  return {
    restrict: 'A',
    link: function(scope, elem, attr) {
      elem.on('load', function() {
        var w = $(this).width(),
            h = $(this).height();
        var div = elem.parent();
      });
    }
  };
});
