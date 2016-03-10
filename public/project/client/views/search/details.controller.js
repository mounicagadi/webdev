/**
 * Created by mounica on 3/4/2016.
 */

(function(){

    'use strict';

    angular
        .module("EatOutApp")
        .controller("DetailsController", detailsController);

    function detailsController($scope, $routeParams, FoursquareService) {
        $scope.id = $routeParams.id;
        $scope.render = render;
        $scope.error = error;

        FoursquareService.findRestaurantByID(
            $scope.id,render,error)

        function render(){

            //console.log(response);
            $scope.info = response;
            console.log($scope.info)
        }

        function error(){
            console.log("error");
        }
    }
})();