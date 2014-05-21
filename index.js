var GSON= require('gson'),
    inspect = require('util-inspect');

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
       }])
       .filter('gson', function()
       {
            return function (value)
            {
              return inspect(value);
            };
       });
