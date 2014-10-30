// define app
angular.module('weatherApp', []).config(function($interpolateProvider){

    //set alternative template tokens to avoid collision with Django
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');

});
