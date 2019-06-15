demoAppModule.directive('eventCard', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'views/eventCard.html',
        scope: {
            event: '='
        }
    }
});