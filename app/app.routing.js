//********** Route Definations ********* */

demoAppModule.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/homePage.html',
        controller: 'HomePageController'
    });
    $routeProvider.when('/event/add', {
        templateUrl: 'views/createEvent.html',
        controller: 'CreateEventController'
    });
    $routeProvider.when('/event/edit/:sessionID', {
        templateUrl: 'views/createEvent.html',
        controller: 'CreateEventController'
    });
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
});

//************************************* */