var GSON= require('gson');

angular.module('angular-gson',[])
       .config(['$httpProvider',function ($httpProvider)
       {
          $httpProvider.defaults.transformRequest.unshift(function (obj)
          {
             return GSON.encode(obj);
          });

          $httpProvider.defaults.transformResponse.push(function (obj)
          {
             return GSON.decode(obj);
          });
       }]);
