demoAppModule.component('createEvent', {
    templateUrl: './createEvent/createEvent.component.html',
    bindings: {},
    controller: (function () {
        function CreateEvent(eventService, $routeParams) {
            this.eventObject = {};
            this.eventService = eventService;
            this.$routeParams = $routeParams;
            this.events = this.eventService.eventData;
            this.sessionID = this.$routeParams.sessionID;
            this.sessionID = this.sessionID ? this.sessionID : Math.floor(10000 + Math.random() * 90000);
            if (this.sessionID) {
                this.getEventData(this.sessionID);
            }
        }
        CreateEvent.prototype.getEventData = function (sessionID) {
            this.selectedEvent = this.events.filter(function (data) {
                if (sessionID == data.sessionID)
                    return data;
            });
            if (this.selectedEvent.length != 0) {
                this.eventTitle = this.selectedEvent[0].title;
                this.eventDescription = this.selectedEvent[0].description;
                this.eventAuthor = this.selectedEvent[0].author;
                this.eventDate = this.selectedEvent[0].date;
            }
        };
        CreateEvent.prototype.addEvent = function () {
            var _this = this;
            this.eventObject = {
                title: this.eventTitle,
                description: this.eventDescription,
                date: this.eventDate,
                author: this.eventAuthor,
                sessionID: this.sessionID
            };
            if (this.selectedEvent.length != 0) {
                this.eventService.eventData.forEach(function (data, index) {
                    if (data.sessionID == _this.sessionID) {
                        _this.eventService.eventData.splice(index, 1);
                    }
                });
            }
            this.eventService.eventData.push(this.eventObject);
        };
        return CreateEvent;
    }())
});
//# sourceMappingURL=createEvent.component.js.map