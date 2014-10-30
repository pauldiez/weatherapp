from django.conf.urls import patterns, url
from api import views

# set routes
urlpatterns = patterns('',

    # GET weather - /api/weather/toronto
    url(r'^(?P<location>\w+)/$', views.get, name='get')

)