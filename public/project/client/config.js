(function() {
    'use strict';

    angular
        .module("EatOutApp")
        .config(Configure);

    function Configure ($routeProvider) {
        $routeProvider

            .when("/home", {
                templateUrl: "views/home/home.view.html",
                controller : "HomeController",
                controllerAs : "model"
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
                controller: "DetailsController",
                controllerAs : "model"
            })

            .when("/profile", {

                templateUrl: "views/users/profile.view.html",
                controller: "ProfileController",
                controllerAs : "model"

            })

            .when("/register", {
                templateUrl: "views/users/register.view.html",
                controller:"RegisterController",
                controllerAs : "model"
            })

            .when("/admin", {
                templateUrl: "views/admin/admin.view.html",
                controller:"AdminController",
                controllerAs : "model"
            })

            .otherwise({
                redirectTo: "/home"
            });
    }

})();