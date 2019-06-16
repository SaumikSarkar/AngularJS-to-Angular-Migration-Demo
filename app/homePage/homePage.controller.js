demoAppModule.controller('HomePageController',
    function HomePageController(eventService) {
        this.events = eventService.eventData;
    }
);