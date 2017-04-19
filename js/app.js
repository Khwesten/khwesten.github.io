/**
 * Created by NoteSamsung on 25/06/2016.
 */
var mainApp = angular.module('mainApp', ['ngSanitize', 'ngRoute', 'ngJScrollPane']);

mainApp.config(function ($routeProvider) {
    $routeProvider
        .when("/:language", {
            templateUrl: "./templates/main.html",
            controller: 'MainController'
        })
        .otherwise("/pt", {
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
        .error(function() {
            $window.location.href = "#en"
        });

    $scope.phone = "+55 (082) 9.9316-7395";
    $scope.email = "k-heiner@hotmail.com";
    $scope.skype = "khwesten.heiner";
    $scope.address = "Av. Sebastião Correia Rocha, Nº 1113 - Bl. 03 Ap. 02";
    $scope.provincyState = "Tabuleiro do Martins - Maceió / AL";
    $scope.urlMaps = "https://www.google.com.br/maps/place/Tabuleiro+do+Martins,+Macei%C3%B3+-+AL,+57061-410/@-9.5934739,-35.7692318,15z/data=!3m1!4b1!4m2!3m1!1s0x70148940e6771d9:0x3f32b2a34da75b70";

    var decreasYears = (new Date().getMonth() + 1 >= 7) ? 0 : 1;
    var currentYear = new Date().getFullYear();
    $scope.yearsOld = currentYear - 1990 - decreasYears;

    $scope.xp = {
        study: [
            {tech: 'csharp', desc: ''},
            {tech: 'python', desc: ''},
            {tech: 'android', desc: ''},
            {tech: 'blender', desc: ''},
            {tech: 'unity', desc: ''}
        ],
        intermediate: [
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
