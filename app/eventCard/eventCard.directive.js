demoAppModule.directive('eventCard', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'eventCard/eventCard.html',
        scope: {
            event: '='
        },
        controllerAs: '$ctrl',
        bindToController: true,
        controller: function() {
            
        }
    }
});