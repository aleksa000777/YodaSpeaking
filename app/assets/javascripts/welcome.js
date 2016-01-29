// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.


ngApp.controller("angularController", ['$scope', '$http','yodaTextService', function($scope, $http, yodaTextService){

  $scope.text = {
    input:"",
    output:""
  };


$scope.clean = function(){
  $scope.text = {
    input:"",
    output:""
  };
}

  $scope.getYodaText = function(text){
    $('#loading').show();
    yodaTextService.yodaTalks(text).then(function(response){
      $scope.text.output = response.data;
      $http.post('/api/yodas', {text: $scope.text}).then(function(res){


        var data = res.data;
      });

      $('#loading').hide();

      if ('speechSynthesis' in window) {
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

}




    });
  };


}]);
