demoAppModule.component('eventCard', {
    templateUrl: 'eventCard/eventCard.component.html',
    bindings: {
        event: '='
    },
    controller: class EventCard {
        constructor() {}
    }
});