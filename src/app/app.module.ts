import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { EventService } from "./_services/event.service";
import { EventCardComponent } from "./components/eventCard/eventCard.component";
import { CreateEventComponent } from "./components/createEvent/createEvent.component";
import { HomePageComponent } from "./components/homePage/homePage.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        EventCardComponent,
        CreateEventComponent,
        HomePageComponent
    ],
    providers: [
        EventService
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: []
})

export class AppModule { }