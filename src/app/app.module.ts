import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UpgradeModule } from "@angular/upgrade/static";
import { AppComponent } from "./app.component";
import { EventService } from "./_services/event.service";
import { EventCardComponent } from "./components/eventCard/eventCard.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        UpgradeModule
    ],
    declarations: [
        AppComponent,
        EventCardComponent
    ],
    providers: [
        EventService
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        EventCardComponent
    ]
})

export class AppModule {

}