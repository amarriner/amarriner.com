(function() {
    'use strict';

    angular.module('amarrinerCom.navbar', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        
    }])
    .directive('navbar', function() {
        return {
            templateUrl: 'js/views/navbar.html'
        };
    })  
    .controller('NavbarCtrl', ['$scope', '$window', '$location',
        function($scope, $window, $location) {
                       
            $scope.menus = [];
            $scope.menus[0] = true;
            $scope.menus[1] = true;
            
            $scope.resetMenu = function(open) {
                for (var i = 0; i < $scope.menus.length; i++) {
                    if (open === i) {
                        $scope.menus[i] = !$scope.menus[i];
                    }
                    else {
                        $scope.menus[i] = true;
                    }
                }
            };
            
        }   
    ]);
}());