demoAppModule.component('createEvent', {
    templateUrl: './createEvent/createEvent.component.html',
    bindings: {},
    controller: class CreateEvent {

        events: any;
        sessionID: number;
        eventTitle: string;
        eventDescription: string;
        eventAuthor: string;
        eventDate: string;
        selectedEvent: Array<any>;
        eventObject: any = {};
        eventService: any;
        $routeParams: any;

        constructor(eventService, $routeParams) {

            this.eventService = eventService;
            this.$routeParams = $routeParams;

            this.events = this.eventService.eventData;
            this.sessionID = this.$routeParams.sessionID;

            this.sessionID = this.sessionID ? this.sessionID : Math.floor(10000 + Math.random() * 90000);
            if (this.sessionID) {
                this.getEventData(this.sessionID);
            }
        }

        getEventData(sessionID) {
            this.selectedEvent = this.events.filter((data: any) => {
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

        addEvent() {
            this.eventObject = {
                title: this.eventTitle,
                description: this.eventDescription,
                date: this.eventDate,
                author: this.eventAuthor,
                sessionID: this.sessionID
            };
            if (this.selectedEvent.length != 0) {
                this.eventService.eventData.forEach((data: any, index: any) => {
                    if (data.sessionID == this.sessionID) {
                        this.eventService.eventData.splice(index, 1);
                    }
                });
            }
            this.eventService.eventData.push(this.eventObject);
        }
    }
});