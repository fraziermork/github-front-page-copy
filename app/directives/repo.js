'use strict';
/* global angular */

(function(){
  angular.module('repoDirective', [])
    .directive('repoView', repoView);
  
  function repoView(){
    return {
      restrict: 'E',
      templateUrl: './repo.html'
    };
    
  }
})();
