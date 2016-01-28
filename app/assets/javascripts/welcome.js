// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// var ctrt = angular.module("YodasSpeaking", []);

ngApp.controller("angularController", ['$scope', '$http','yodaTextService', function($scope, $http, yodaTextService){

  $scope.text = {
    input:"",
    output:""
  };

  $scope.getYodaText = function(text){
    yodaTextService.yodaTalks(text).then(function(response){
      $scope.text.output = response.data;
    });
  };


}]);
