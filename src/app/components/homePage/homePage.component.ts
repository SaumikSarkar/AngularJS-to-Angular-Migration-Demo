import { Component, OnInit } from "@angular/core";
import { EventService } from "../../_services/event.service";
import { EventData } from "../../_models/EventData";

@Component({
    selector: 'home-page',
    templateUrl: './homePage.component.html',
    styles: [require('./homePage.component.scss').toString()]
})

export class HomePageComponent implements OnInit {

    events: Array<EventData>;

    constructor(public eventService: EventService) { }

    ngOnInit() {
        this.events = this.eventService.eventData;
    }
}