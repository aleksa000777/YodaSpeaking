var speek=angular.module('voice',[]);

speek.controller("voiceController", ['$scope','$http','yodaTextService', function($scope, $http, yodaTextService){

  var URL = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous";
  var configHeaders = {
    headers:{
      "X-Mashape-Key": "oQqCQAHUjlmshJmJ0Q2fZdOZql8Ip1IIbKejsnDm24vl5HJO3a",
    "Content-Type":"application/x-www-form-urlencoded",
    "Accept":"application/json"
    }
  };
  $scope.try=function(){
    $('#loading').show();


    $scope.quote='';
    $http.get(URL, configHeaders).then(function(response){

      data = response.data;
      console.log(data.quote,"      before ");

      yodaTextService.yodaTalks(data.quote).then(function(response){
        $('#loading').hide();
        $scope.quote = response.data;

        var msg = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        msg.voice = voices[16]; // Note: some voices don't support altering params
        msg.voiceURI = 'native';
        msg.volume = 1; // 0 to 1
        msg.rate = 0.8; // 0.1 to 10
        msg.pitch = 2; //0 to 2
        msg.text = response.data;
        msg.lang = 'en-US';

        msg.onend = function(e) {
          console.log('Finished in ' + event.elapsedTime + ' seconds.');
        };

        speechSynthesis.speak(msg);
      });



  })
}







}])
