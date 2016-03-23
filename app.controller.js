angular
  .module('surfApp')

  .controller('CountyInfoController', function ($scope, NewSurfInfoService){
    $scope.counties = [
     {name:'Humboldt', url: 'humboldt' },
     {name:'Mendocino', url: 'mendocino' },
     {name:'Sonoma', url: 'sonoma'},
     {name:'Marin', url: 'marin' },
     {name:'San Francisco', url: 'san-francisco'}, //add dashes for url
     {name:'San Mateo', url: 'san-mateo'}, // add dashes for url
   ];
   $scope.getCountyInfoCtrl = function (county) {
         NewSurfInfoService.getSurfInfo(county.toLowerCase())
           .then(function(data){
             $scope.info = data.data;
             console.log('mah data', data);
           });
         };
    // $scope.getWindInfoCtrl = function (county) {
    //       NewWindInfoService.getWindInfo(county)
    //         .then(function(data){
    //            $scope.info = data.data;
    //            console.log('my wind data', data);
    //          });
    //      };
    });
