demoAppModule.component('homePage', {
    templateUrl: './homePage/homePage.component.html',
    bindings: {},
    controller: (function () {
        function HomePage(eventService) {
            this.eventService = eventService;
            this.events = this.eventService.eventData;
        }
        return HomePage;
    }())
});
//# sourceMappingURL=homePage.component.js.map