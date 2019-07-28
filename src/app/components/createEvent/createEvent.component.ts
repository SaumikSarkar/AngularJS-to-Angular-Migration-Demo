import { Component, OnInit } from "@angular/core";
import { EventService } from "../../_services/event.service";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
    selector: 'create-event',
    templateUrl: './createEvent.component.html',
    styles: [require('./createEvent.component.scss').toString()]
})


export class CreateEventComponent implements OnInit {

    events: any;
    sessionID: number;
    eventTitle: string;
    eventDescription: string;
    eventAuthor: string;
    eventDate: string;
    selectedEvent: Array<any>;
    eventObject: any = {};

    constructor(public eventService: EventService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            let parse = params.get('sessionID');
            this.sessionID = +parse;
        });

        this.events = this.eventService.eventData;

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