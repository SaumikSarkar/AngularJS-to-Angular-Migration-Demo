import { Component, Input } from "@angular/core";

@Component({
    selector: 'event-card',
    templateUrl: './eventCard.component.html',
    styles: [require('./eventCard.component.scss').toString()]
})

export class EventCardComponent {
    @Input() event: any;
    constructor() { }
}