demoAppModule.component('homePage', {
    templateUrl: './homePage/homePage.component.html',
    bindings: {},
    controller: class HomePageComponent {

        events: any;
        eventService: any;

        constructor (eventService) {
            this.eventService = eventService;
            this.events = this.eventService.eventData;
        }
    }
});