from django.http import HttpResponse
import pyowm
import json


# get weather forecast
def get(request, location):

    #get weather api connection
    weather_api_key = '47fbdd1ede860986b11269467e18429b' #TODO(paul): refactor this api key into a config file.
    owm_api = pyowm.OWM(weather_api_key)
    observation = owm_api.weather_at_place(location)

    if not observation:

        # return 404 not found
        return HttpResponse(json.dumps('The city ' + location + 'could not be found'), status=404)

    else:

        # get weather
        weather = observation.get_weather()

        # set degree metric
        weather.get_temperature('celsius')

        #return weather response
        return HttpResponse(weather.to_JSON(), content_type="application/json")
