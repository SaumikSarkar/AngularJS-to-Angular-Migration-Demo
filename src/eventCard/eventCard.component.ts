angular.module('demoApp').component('eventCard', {
    templateUrl: './eventCard.component.html',
    bindings: {
        event: '='
    },
    controller: class EventCardComponent {
        constructor() {}
    }
});