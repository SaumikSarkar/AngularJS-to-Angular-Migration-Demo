demoAppModule.component('homePage', {
    templateUrl: './homePage/homePage.component.html',
    bindings: {},
    controller: (function () {
        function HomePageComponent(eventService) {
            this.eventService = eventService;
            this.events = this.eventService.eventData;
        }
        return HomePageComponent;
    }())
});
//# sourceMappingURL=homePage.component.js.map