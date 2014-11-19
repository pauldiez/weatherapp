// define the weather functions which will be used in the app
angular.module('weatherApp').controller('weatherCtrl', ['$scope', 'weatherFactory', function($scope, weatherFactory) {

    //set scope variables
    $scope.forecasts = []; // store weather location objects
    $scope.errorMessage = '';

    // add a weather location
    $scope.addForecastByLocation = function(locationName) {
        weatherFactory.getCurrentForecastByLocation(locationName).then(function(data){
            var forecast = {
                'location'  :locationName,
                'temp'      : $scope.convertToCelsius(data.temperature.temp)
            };
            $scope.forecasts.push(forecast);
        },function(err) {
            $scope.errorMessage = err;
        });
    };

    // fresh a forecast
    $scope.refreshForecast = function(forecast) {
        weatherFactory.getCurrentForecastByLocation(forecast.location).then(function(data){
            forecast.temp = $scope.convertToCelsius(data.temperature.temp);
        });
    };

    // convert temp to celsius
    $scope.convertToCelsius = function(temp){
        return parseFloat(temp - 273.15).toFixed(0);
    };

    // add toronto weather forecast when app loads
    $scope.addForecastByLocation('toronto');

}]);
