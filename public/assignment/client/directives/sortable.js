/**
 * Created by mounica on 3/18/2016.
 */
(function (){

    "use strict";

    angular
        .module("fieldSortable", [])
        .directive("fieldSortable", fieldSortable);

    function fieldSortable() {

        var start = null, end = null;
        function link(scope, element, attributes) {
            var fieldAxis = attributes.fieldAxis;

            $(element).sortable( {
                axis: fieldAxis,
                start: function (event, ui) {
                    start = ui.item.index();
                },

                stop: function (event, ui) {
                    end = ui.item.index();
                    var temp = scope.fields[start];
                    scope.fields[start] = scope.fields[end];
                    scope.fields[end] = temp;
                    scope.$apply();
                }
            });
        }
        return {
            link: link
        }
    }
})();