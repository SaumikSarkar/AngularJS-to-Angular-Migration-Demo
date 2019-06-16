//********** Route Definations ********* */

demoAppModule.config(function ($routeProvider,$locationProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'homePage/homePage.html',
        controller: 'HomePageController',
        controllerAs: '$ctrl'
    });
    $routeProvider.when('/event/add', {
        templateUrl: 'createEvent/createEvent.html',
        controller: 'CreateEventController',
        controllerAs: '$ctrl'
    });
    $routeProvider.when('/event/edit/:sessionID', {
        templateUrl: 'createEvent/createEvent.html',
        controller: 'CreateEventController',
        controllerAs: '$ctrl'
    });
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
    $locationProvider.html5Mode(true);
});

//************************************* */