from django.conf.urls import patterns, url
from website import views

# set website routes
urlpatterns = patterns('',

    # index route
    url(r'^$', views.index, name='index')

)