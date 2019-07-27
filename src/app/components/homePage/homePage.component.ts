import { Component, OnInit } from "@angular/core";
import { EventService } from "../../_services/event.service";

@Component({
    selector: 'home-page',
    templateUrl: './homePage.component.html',
    styles: [require('./homePage.component.scss').toString()]
})

export class HomePageComponent implements OnInit {

    events: any;

    constructor(public eventService: EventService) { }

    ngOnInit() {
        this.events = this.eventService.eventData;
    }
}