import { Injectable } from "@angular/core";
import { EventData } from "../_models/EventData";

@Injectable()
export class EventService {
    eventData: Array<EventData>;
    constructor() {
        this.eventData = [
            {
                title: 'AngularJS Fundamentals',
                description: 'This session includes the fundamentals for AngularJS',
                date: '22nd July, 2019',
                author: 'Saumik Sarkar',
                sessionID: 23407
            },
            {
                title: 'Angular Fundamentals',
                description: 'This session includes the fundamentals for Angular',
                date: '18th August, 2019',
                author: 'Abhishek Srivastava',
                sessionID: 53107
            },
            {
                title: 'Angular In-Depth',
                description: 'This session includes in depth  discussion on Angular',
                date: '2nd September, 2019',
                author: 'Spardha Jain',
                sessionID: 93421
            },
            {
                title: 'Modern JavaScript Fundamentals',
                description: 'This session includes the fundamentals for JavaScript and ECMAScript',
                date: '10th August, 2019',
                author: 'Saumik Sarkar and Spardha Jain',
                sessionID: 63437
            },
            {
                title: 'Creating RESTful Web APIs',
                description: 'This session includes the details on creating RESTful Web APIs',
                date: '20th September, 2019',
                author: 'Spardha Jain and Abhishek Srivastava',
                sessionID: 22130
            },
            {
                title: 'Understanding the RxJS',
                description: 'This session includes the details on the RxJS Library',
                date: '30th June, 2019',
                author: 'Abhishek Srivastava and Saumik Sarkar',
                sessionID: 89411
            }
        ];
    }
}