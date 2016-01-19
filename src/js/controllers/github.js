(function() {
    'use strict';

    angular.module('amarrinerCom.github', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        
    }])
    .controller('GithubCtrl', ['$scope', '$window', '$location', 'Github', 
        function($scope, $window, $location, Github) {
                       
            $scope.data = "";
            $scope.error = "";
            $scope.repoCount = "";
            
            Github.get().then(function(response) {
                $scope.repoCount = response.data.length;
                $scope.data = response.data.slice(0,3);
                console.log($scope.data);
            }).catch(function(response) {
                $scope.error = "Error retrieving Github data!";
            });
        }   
    ]);
}());