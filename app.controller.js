angular
  .module('surfApp')

  .controller('CountyInfoController', function ($scope, NewSurfInfoService){

    $scope.counties = [
     {name:'Humboldt'},
     {name:'Mendocino', },
     {name:'Sonoma', },
     {name:'Marin', },
     {name:'San Francisco'},
     {name:'San Mateo'},
   ];
    $scope.getCountyInfoCtrl = function (county) {
      console.log ("county enter: ", county);
      NewSurfInfoService.getSurfInfo(county.toLowerCase())
        .then(function(data){
          console.log(data);
        });
      };

    });
