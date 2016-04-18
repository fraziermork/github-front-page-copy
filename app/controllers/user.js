'use strict';
/* global angular */

(function(){
  var app = angular.module('userModule', []);
  app.controller('UserController', ['$http', '$log', UserController]);
  
  
  
  
  function UserController($http, $log){
    $log.log('UserController');
    
    
    
    
    
  }
  
  
})();
