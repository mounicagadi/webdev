(function() {
    'use strict';

    angular
        .module("SampleApp")
        .config(Configure);

    function Configure ($routeProvider) {
        $routeProvider

            .when("/home", {
                templateUrl: "views/home/home.view.html",
                controller : "HomeController"
            })

            .when("/search/:name", {
                templateUrl: "views/search/results.view.html",
                controller : "ResultsController"
            })


            .when("/login", {
                templateUrl: "views/users/login.view.html",
                controller : "LoginController",
                controllerAs : "model"

            })

            .when("/details/:id", {
                templateUrl: "views/search/details.view.html",
                controller: "DetailsController"
            })

            .when("/profile", {

                templateUrl: "views/users/profile.view.html",
                controller: "ProfileController"

            })

            .when("/register", {
                templateUrl: "views/users/register.view.html",
                controller:"RegisterController"
            })

            .otherwise({
                redirectTo: "/home"
            });
    }

})();