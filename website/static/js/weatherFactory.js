// define weather factory to fetch weather forecast from API
angular.module('weatherApp').factory('weatherFactory', ['$http', '$q', function ($http, $q){

    function getCurrentForecastByLocation (locationName) {

        // start promise
        var deferred = $q.defer();

        $http.get('api/weather/'+locationName+'/')
        .success(function(data){
            deferred.resolve(data);
        })
        .error(function(err){
            deferred.reject(err);
        });

        // return promise
        return deferred.promise;
    }

    return {
        getCurrentForecastByLocation: getCurrentForecastByLocation
    };

}]);
