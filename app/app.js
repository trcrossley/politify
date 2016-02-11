
var politify = angular.module('Politify', ['ui.router', 'ngMaterial', 'ngMessages', 'ngMdIcons']);

politify.config(function ($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state("home", {
        url: "/",
        controller: "HomeCtrl",
        templateUrl: "app/views/home.html"
    });
    $stateProvider.state("summary", {
        url: "/summary",
        controller: "SummaryCtrl",
        templateUrl: "app/views/summary.html"
    });
});

politify.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
          'default': '400', // by default use shade 400 from the cyan palette for primary intentions
          'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
          'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
          'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
      })
      .accentPalette('blue-grey')
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
