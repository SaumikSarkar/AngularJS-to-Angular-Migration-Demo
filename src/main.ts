import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, downgradeInjectable, downgradeComponent } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';
import { EventService } from './app/_services/event.service';
import { EventCardComponent } from './app/components/eventCard/eventCard.component';

declare var angular: angular.IAngularStatic;

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    //downgrades
    angular.module('demoApp')
        .factory('eventService', downgradeInjectable(EventService))
        .directive('eventCard', downgradeComponent({
            component: EventCardComponent
        }));

    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.documentElement, ['demoApp']);
});