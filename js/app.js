(function() {
  'use strict';

  angular.module('application', [
    // Angular Animate Module
    'ngAnimate',
    //foundation-apps
    'foundation',
    //angular Foundation
    'mm.foundation'
  ])
    .config(config)
    .run(run)
  ;

  config.$inject = ['$locationProvider'];

  function config($locationProvider) {
    
    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });
  }

  function run() {
    FastClick.attach(document.body);
  }

})();
