(function() {

    'use strict';

    angular.module("FormBuilderApp")
        .controller("RegisterController",RegisterController);

    //Function to register a new user
    function RegisterController($location, UserService, $rootScope)
    {
        var vm = this;

        vm.register = register;

        function init(){

        }

        init();

        function setEmails(emails){
            return emails.trim().split(',');
        }
        function register (user) {

            if(user != null){

                if (user.username != null && user.password != null && user.verifypassword != null &&
                    user.password === user.verifypassword && user.email != null) {


                    user.email = setEmails(user.email);
                UserService.register(user)
                    .then(function (newUser) {
                    $rootScope.user = newUser.data;
                    $location.path("/profile");
                });



            } else {

                alert ("Invalid entry");
            }

        }else {
                alert("Please fill the required fields");
            }
        }

    }

})
();