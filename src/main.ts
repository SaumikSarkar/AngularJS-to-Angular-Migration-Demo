import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { UpgradeModule, downgradeInjectable } from '@angular/upgrade/static';
import { AppModule } from './app/app.module';
import { EventService } from './app/_services/event.service';

declare var angular: angular.IAngularStatic;

platformBrowserDynamic().bootstrapModule(AppModule).then(platformRef => {
    //downgrades
    angular.module('demoApp')
        .factory('eventService', downgradeInjectable(EventService));

    const upgrade = platformRef.injector.get(UpgradeModule) as UpgradeModule;
    upgrade.bootstrap(document.documentElement, ['demoApp']);
});