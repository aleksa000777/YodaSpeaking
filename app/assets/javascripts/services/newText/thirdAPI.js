var ctrl = angular.module('yodaApiFactory', []);


ctrl.factory("yodaTextResource", ['$http', function($http){

  var FINAL_API_URL = "https://yoda.p.mashape.com/yoda?sentence=";
  return {
    yodaTalks:yodaTalks
  };

  function yodaTalks(encodedText){
    console.log(encodedText, 'encodedText');
    var configHeaders = {
      headers:{
        "X-Mashape-Key": "oQqCQAHUjlmshJmJ0Q2fZdOZql8Ip1IIbKejsnDm24vl5HJO3a",
        "Accept": "application/json"
      }
    };

    return $http.get(FINAL_API_URL + encodedText, configHeaders).then(function(output){
      console.log(output);
      return output;
    }, function(){
      $http.get('/api/yodas').then(function(response){
      var data = response.data;
      var item = data.text[Math.floor(Math.random()*data.text.length)];
      console.log(item, 'random');
      return item.output
  })
    });
  }

}]);
