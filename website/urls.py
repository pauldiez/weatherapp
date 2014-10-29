from django.conf.urls import patterns, url
from website import views

# set website routes
urlpatterns = patterns('',

    #index - /
    url(r'^$', views.index, name='index')

)