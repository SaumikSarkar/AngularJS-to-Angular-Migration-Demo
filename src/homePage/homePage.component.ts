angular.module('demoApp').component('homePage', {
    templateUrl: './homePage.component.html',
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