var mainApp = angular.module('mainApp', ['ngSanitize', 'ngRoute', 'ngJScrollPane']);

mainApp.config(function ($routeProvider) {
    $routeProvider
        .when("/:language", {
            templateUrl: "./templates/main.html",
            controller: 'MainController'
        })
        .otherwise("/en", {
            templateUrl: 'index.html',
            controller: 'MainController'
        });
});

mainApp.controller('MainController', function MainController($scope, $sce, $routeParams, $http, $window) {

    $scope.lang = $routeParams.language;

    $http({method: 'GET', url: 'data/' + $scope.lang + '.json'})
        .success(function (data, status, headers, config) {
            $scope.main = data;
        })
        .error(function () {
            $window.location.href = "#en"
        });

    $scope.phone = "+55 (082) 9.9804-4490";
    $scope.email = "k-heiner@hotmail.com";
    $scope.skype = "khwesten.heiner";
    $scope.address = "Vila Indiana 911";
    $scope.provincyState = "Butantã - São Paulo/ SP";
    $scope.urlMaps = "https://www.google.com.br/maps/place/Vila+Indiana,+S%C3%A3o+Paulo+-+SP,+05586-001/@-23.5737044,-46.7294895,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce566850cd1659:0x8c592455e465adb3!8m2!3d-23.5735625!4d-46.7279861";
    // $scope.urlMaps = "https://www.google.com.br/maps/place/Tabuleiro+do+Martins,+Macei%C3%B3+-+AL,+57061-410/@-9.5934739,-35.7692318,15z/data=!3m1!4b1!4m2!3m1!1s0x70148940e6771d9:0x3f32b2a34da75b70";

    var decreasYears = (new Date().getMonth() + 1 >= 7) ? 0 : 1;
    var currentYear = new Date().getFullYear();
    $scope.yearsOld = currentYear - 1990 - decreasYears;

    $scope.xp = {
        study: [
            {tech: 'csharp', desc: ''},
            {tech: 'android', desc: ''},
            {tech: 'blender', desc: ''},
            {tech: 'unity', desc: ''},
            {tech: 'ts', desc: ''},
            {tech: 'pixijs', desc: ''}
        ],
        intermediate: [
            {tech: 'rails', desc: ''},
            {tech: 'nodejs', desc: ''},
            {tech: 'angular', desc: ''},
            {tech: 'knockoutjs', desc: ''},
            {tech: 'mongodb', desc: ''},
            {tech: 'dynamodb', desc: ''},
            {tech: 'ionic', desc: ''},
            {tech: 'graphql', desc: ''}
        ],
        advanced: [
            {tech: 'php', desc: ''},
            {tech: 'java', desc: ''},
            {tech: 'mysql', desc: ''},
            {tech: 'html5', desc: ''},
            {tech: 'css3', desc: ''},
            {tech: 'js', desc: ''}
        ]
    };

    $scope.paneConfig = {verticalDragMinHeight: 200};
});
