(function() {
    'use strict';

    var module = angular.module('amarrinerCom', [
        'ngRoute',
        'ui.bootstrap',
        'amarrinerCom.navbar'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'js/views/index.html'
        })
        .when('/bots', {
            templateUrl: 'js/views/bots.html'
        }).when('/music', {
            templateUrl: 'js/views/music.html'
        }).when('/spelunky', {
            templateUrl: 'js/views/spelunky.html'
        }).otherwise({
            redirectTo: '/'
        });
    }]);

}());