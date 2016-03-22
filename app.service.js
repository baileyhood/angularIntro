angular
.module('surfApp')
.service ('NewSurfInfoService', function ($http){
  function getSurfInfo(county) {
      return $http.get('http://api.spitcast.com/api/county/tide/' + county + '/')
    }
  return {
    getSurfInfo: getSurfInfo
  }
})
