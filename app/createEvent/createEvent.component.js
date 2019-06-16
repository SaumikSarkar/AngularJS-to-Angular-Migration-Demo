demoAppModule.component('createEvent', {
    templateUrl: './createEvent/createEvent.component.html',
    bindings: {

    },
    controller: function (eventService, $routeParams) {
        this.events = eventService.eventData;
        this.sessionID = $routeParams.sessionID;
        this.eventTitle;
        this.eventDescription;
        this.eventAuthor;
        this.eventDate;
        this.selectedEvent;

        this.eventObject = {};

        this.getEventData = function (sessionID) {
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
        }

        this.sessionID = this.sessionID ? this.sessionID : Math.floor(10000 + Math.random() * 90000);

        if (this.sessionID) {
            this.getEventData(this.sessionID);
        }

        this.addEvent = function () {
            this.eventObject = {
                title: this.eventTitle,
                description: this.eventDescription,
                date: this.eventDate,
                author: this.eventAuthor,
                sessionID: this.sessionID
            };
            if (this.selectedEvent.length != 0) {
                eventService.eventData.forEach(function (data, index) {
                    if (data.sessionID == this.sessionID) {
                        eventService.eventData.splice(index, 1);
                    }
                }.bind(this));
            }
            eventService.eventData.push(this.eventObject);
        }
    }
});