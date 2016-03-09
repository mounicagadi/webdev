/**
 * Created by mounica on 3/4/2016.
 */
(function() {

    'use strict';

    angular
        .module("EatOutApp")
        .factory("FoursquareService", FoursquareService);

    function FoursquareService($http) {
        var api = {
            findByNameLocation: findByNameLocation,
            findwhenemptyfields : findwhenemptyfields
        };
        return api;

        function findByNameLocation(name,place,callback,error) {

            $http({
                method: "JSONP",
                params: {
                    query: name,
                    near : place,
                    limit : 10,
                    client_id : '2TEEJCYF24ZQ0521PG3P1LULDWVGPFJWNGSTUQNI0OHQA2ID',
                    client_secret : '2HUMBZSV5A55CM4IVIHOSO5N3QGWCCL4GZ3I0BXVZGH0ROXA',
                    v : '20140806'
                },
                url: "https://api.foursquare.com/v2/venues/search?callback=JSON_CALLBACK",
                isArray: true
            }).success(function(data, status) {
                //console.log(data.venues[0].name)
                callback(data);
            }).error(function(data, status) {
                console.log("Unable to fetch data");
                error();
            });



        }

        function findwhenemptyfields(callback,error) {

            var name = "restaurants"
            var place = "boston"

            $http({
                method: "JSONP",
                params: {
                    query: name,
                    near : place,
                    limit : 10,
                    client_id : '2TEEJCYF24ZQ0521PG3P1LULDWVGPFJWNGSTUQNI0OHQA2ID',
                    client_secret : '2HUMBZSV5A55CM4IVIHOSO5N3QGWCCL4GZ3I0BXVZGH0ROXA',
                    v : '20140806'
                },
                url: "https://api.foursquare.com/v2/venues/search?callback=JSON_CALLBACK",
                isArray: true
            }).success(function(data, status) {
                //console.log(data.venues[0].name)
                callback(data);
            }).error(function(data, status) {
                console.log("Unable to fetch data");
                error();
            });


        }

    }
})();