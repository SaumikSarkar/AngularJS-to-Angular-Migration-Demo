import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { UpgradeModule } from "@angular/upgrade/static";
import { AppComponent } from "./app.component";
import { EventService } from "./_services/event.service";
import { EventCardComponent } from "./components/eventCard/eventCard.component";
import { CreateEventComponent } from "./components/createEvent/createEvent.component";
import { HomePageComponent } from "./components/homePage/homePage.component";

function getRouteParams(injector: any) {
    return injector.get('$routeParams');
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        UpgradeModule
    ],
    declarations: [
        AppComponent,
        EventCardComponent,
        CreateEventComponent,
        HomePageComponent
    ],
    providers: [
        EventService,
        { provide: '$routeParams', useFactory: getRouteParams, deps: ['$injector']}
    ],
    bootstrap: [
        AppComponent
    ],
    entryComponents: [
        EventCardComponent,
        CreateEventComponent,
        HomePageComponent
    ]
})

export class AppModule {

}