var api = angular.module('puppiesApiFactory', []);

api.factory("yodaTextService", ['yodaTextResource', function(yodaTextResource){
  return {
    yodaTalks:yodaTalks
  };

  function yodaTalks(text){
    return yodaTextResource.yodaTalks(text);
    console.log(text, 'text');
  };

}])
