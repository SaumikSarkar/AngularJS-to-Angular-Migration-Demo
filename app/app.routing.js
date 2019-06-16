//********** Route Definations ********* */

demoAppModule.config(function ($routeProvider,$locationProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'homePage/homePage.html',
        controller: 'HomePageController'
    });
    $routeProvider.when('/event/add', {
        templateUrl: 'createEvent/createEvent.html',
        controller: 'CreateEventController'
    });
    $routeProvider.when('/event/edit/:sessionID', {
        templateUrl: 'createEvent/createEvent.html',
        controller: 'CreateEventController'
    });
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
    $locationProvider.html5Mode(true);
});

//************************************* */