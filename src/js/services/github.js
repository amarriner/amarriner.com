(function() {
    'use strict';

    var module = angular.module('amarrinerCom.githubFactory', []).factory('Github', ['$http', 
        function($http) {
            return {
                                                    
                get: function() {
                    return $http.get('https://api.github.com/users/amarriner/repos?type=owner&sort=updated&direction=desc')
                        .success(function(response) {
                            return response;
                        })
                        .error(function(response) {
                            return response;
                        });
                }
                
            };
        }
    ]);
}());