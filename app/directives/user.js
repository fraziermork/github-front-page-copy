'use strict';
/* global angular */

(function(){
  angular.module('userDirective', [])
    .directive('userView', userView);
  
  function userView(){
    return {
      restrict: 'E',
      templateUrl: './repo.html'
    };
  }
})();
