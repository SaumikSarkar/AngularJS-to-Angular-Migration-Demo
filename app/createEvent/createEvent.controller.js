demoAppModule.controller('CreateEventController',
    function HomePageController($scope, eventService, $routeParams) {
        $scope.events = eventService.eventData;
        $scope.sessionID = $routeParams.sessionID;
        $scope.eventTitle;
        $scope.eventDescription;
        $scope.eventAuthor;
        $scope.eventDate;
        $scope.selectedEvent;

        $scope.eventObject = {};

        $scope.getEventData = function (sessionID) {
            $scope.selectedEvent = $scope.events.filter(function (data) {
                if (sessionID == data.sessionID)
                    return data;
            });
            if ($scope.selectedEvent.length != 0) {
                $scope.eventTitle = $scope.selectedEvent[0].title;
                $scope.eventDescription = $scope.selectedEvent[0].description;
                $scope.eventAuthor = $scope.selectedEvent[0].author;
                $scope.eventDate = $scope.selectedEvent[0].date;
            }
        }

        $scope.sessionID = $scope.sessionID ? $scope.sessionID : Math.floor(10000 + Math.random() * 90000);

        if ($scope.sessionID) {
            $scope.getEventData($scope.sessionID);
        }

        $scope.addEvent = function () {
            $scope.eventObject = {
                title: $scope.eventTitle,
                description: $scope.eventDescription,
                date: $scope.eventDate,
                author: $scope.eventAuthor,
                sessionID: $scope.sessionID
            };
            if ($scope.selectedEvent.length != 0) {
                eventService.eventData.forEach(function (data, index) {
                    if (data.sessionID == $scope.sessionID) {
                        eventService.eventData.splice(index, 1);
                    }
                });
            }
            eventService.eventData.push($scope.eventObject);
        }
    }
);