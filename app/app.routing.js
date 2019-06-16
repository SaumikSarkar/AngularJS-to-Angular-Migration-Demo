//********** Route Definations ********* */

demoAppModule.config(function ($routeProvider,$locationProvider) {
    $routeProvider.when('/home', {
        template: '<home-page></home-page>'
    });
    $routeProvider.when('/event/add', {
        template: '<create-event></create-event>'
    });
    $routeProvider.when('/event/edit/:sessionID', {
        template: '<create-event></create-event>'
    });
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
    $locationProvider.html5Mode(true);
});

//************************************* */