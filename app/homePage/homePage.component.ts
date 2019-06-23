demoAppModule.component('homePage', {
    templateUrl: './homePage/homePage.component.html',
    bindings: {},
    controller: class HomePage {

        events: any;
        eventService: any;

        constructor (eventService) {
            this.eventService = eventService;
            this.events = this.eventService.eventData;
        }
    }
});