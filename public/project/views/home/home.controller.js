/**
 * Created by mounica on 3/3/2016.
 */
(function() {

    'use strict';

    angular
        .module("EatOutApp")
        .controller("HomeController", HomeController);

    //Function to display the content on the homepage
    function HomeController($scope, $location, $rootScope, FoursquareService, $routeParams) {

        $scope.search = search;
        $scope.render = render;
        $scope.name = $routeParams.name;


        var default_place = "boston";
        var default_name = "restaurants"

        function search(name,place) {

            if (name == null && place == null) {
                console.log("empty fields");
                FoursquareService
                    .findByNameLocation("restaurants", "boston", render);
            }

            else if (name == null && place !== null){

                console.log("name null");
                FoursquareService
                    .findByNameLocation("restaurants", place, render);
            }

            else if (name !== null && place == null){

                console.log("place null");
                FoursquareService
                    .findByNameLocation(name, "boston", render);
            }

            else {

                //$location.path("/home/"+name);
                console.log(name);
                FoursquareService
                    .findByNameLocation(name, place, render);

            }
        }

        function render(response){
            console.log(response)
            $rootScope.info = response;
            $rootScope.name = $scope.name;
            console.log("name - "+$rootScope.info.response.venues[0].name);
            $location.url("/search/"+$scope.name);
        }

    }
})();
