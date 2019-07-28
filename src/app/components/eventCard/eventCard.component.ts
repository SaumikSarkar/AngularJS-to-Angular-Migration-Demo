import { Component, Input } from "@angular/core";
import { EventData } from "../../_models/EventData";

@Component({
    selector: 'event-card',
    templateUrl: './eventCard.component.html',
    styles: [require('./eventCard.component.scss').toString()]
})

export class EventCardComponent {
    @Input() event: EventData;
    constructor() { }
}