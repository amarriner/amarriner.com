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
        }).otherwise({
            redirectTo: '/'
        });
    }]);

}());