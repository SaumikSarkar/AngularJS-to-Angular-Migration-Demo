demoAppModule.controller('HomePageController',
    function HomePageController($scope, eventService) {
        $scope.events = eventService.eventData;
    }
);