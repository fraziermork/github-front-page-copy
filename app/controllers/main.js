'use strict';
/* global angular */

//, 'repoDirective', , 'repoModule'
(function(){
  var app = angular.module('app', ['userDirective', 'userModule']);
  app.controller('MainController', ['$http', '$log', MainController]);
  
  
  function MainController($http, $log){
    const vm          = this;
    vm.section        = 'user';
    
    
    vm.userData       = {};
    vm.followers      = [];
    vm.following      = [];
    vm.repos          = [];
    vm.starred        = [];
    
    vm.initialize     = initialize;
    vm.setSection     = setSection;
    vm.loadUser       = loadUser;
    vm.loadRepos      = loadRepos;
    vm.loadFollowers  = loadFollowers;
    vm.loadFollowing  = loadFollowing;
    vm.loadStarred    = loadStarred;
    vm.onRepoClick    = onRepoClick;
    
    function initialize(){
      vm.section = 'user';
      vm.loadUser();
      vm.loadRepos();
      vm.loadFollowers();
      vm.loadFollowing();
      vm.loadStarred();
    }
    
    function setSection(section){
      $log.log('setSection called, section set to ' + section);
      vm.section = section;
    }
    
    function loadUser(){
      $log.log('loadUser');
      $http.get('https://api.github.com/users/fraziermork')
      .then(function(response){
        $log.log('loadUser');
        $log.log(response.data);
        vm.userData = response.data;  
      }, function(err){
        $log.log('loadUser error:');
        $log.log(err);
      });
    }
    
    function loadRepos(){
      $log.log('loadRepos');
      $http.get('https://api.github.com/users/fraziermork/repos')
      .then(function(response){
        $log.log('loadRepos');
        vm.repos = response.data;
        $log.log(response.data);
      }, function(err){
        $log.log('loadRepos error:');
        $log.log(err);
      });
    }
    
    
    function loadFollowers(){
      $log.log('loadFollowers');
      $http.get('https://api.github.com/users/fraziermork/followers')
      .then(function(response){
        $log.log('loadFollowers');
        $log.log(response.data);
        vm.followers = response.data;
      }, function(err){
        $log.log('loadFollowers error:');
        $log.log(err);
      });
    }

    
    function loadFollowing(){
      $log.log('loadFollowing');
      $http.get('https://api.github.com/users/fraziermork/following')
      .then(function(response){
        $log.log('loadFollowing');
        $log.log(response.data);
        vm.following = response.data;
      }, function(err){
        $log.log('loadFollowing error:');
        $log.log(err);
      });
    }
    
    
    function loadStarred(){
      $log.log('loadStarred');
      $http.get('https://api.github.com/users/fraziermork/starred')
      .then(function(response){
        $log.log('loadStarred');
        $log.log(response.data);
        vm.starred = response.data;
      }, function(err){
        $log.log('loadStarred error:');
        $log.log(err);
      });
      
    }
    
    
    
    
    
    
    function onRepoClick(){
      $log.log('onRepoClick');
    }
    
    
    
  }
  
  
})();
