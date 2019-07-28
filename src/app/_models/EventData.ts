import { IEventData } from "../_contracts/IEventData";

export class EventData implements IEventData {
    title: string;    
    description: string;
    date: string;
    author: string;
    sessionID: number;

    constructor(data?: IEventData) {
        this.title = data ? data.title : null;
        this.description = data ? data.description : null;
        this.date = data ? data.date : null;
        this.author = data ? data.author : null;
        this.sessionID = data ? data.sessionID : null;
    }
}