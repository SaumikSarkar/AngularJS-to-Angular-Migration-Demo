demoAppModule.component('homePage', {
    templateUrl: './homePage/homePage.component.html',
    bindings: {

    },
    controller: function (eventService) {
        this.events = eventService.eventData;
    }
});