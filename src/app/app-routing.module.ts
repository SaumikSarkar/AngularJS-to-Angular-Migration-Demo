import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomePageComponent } from "./components/homePage/homePage.component";
import { CreateEventComponent } from "./components/createEvent/createEvent.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomePageComponent},
    { path: 'event/add', component: CreateEventComponent},
    { path: 'event/edit/:sessionID', component: CreateEventComponent},
    { path: '**' , redirectTo: 'home' }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }