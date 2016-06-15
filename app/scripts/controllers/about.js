'use strict';

/**
 * @ngdoc function
 * @name placesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the placesApp
 */
angular.module('placesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
