angular
.module('surfApp')
.service ('NewSurfInfoService', function ($http){
  function getSurfInfo(county) {
      return $http.get('http://api.spitcast.com/api/county/tide/' + county + '/');
    }
  function getWindInfo (county) {
    return $http.get('http://api.spitcast.com/api/county/wind/' + county + '/');
  }
  return {
    getSurfInfo: getSurfInfo,
    getWindInfo: getWindInfo
  };
});
