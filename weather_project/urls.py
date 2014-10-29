from django.conf.urls import patterns, include, url

# set routes
urlpatterns = patterns('',

    # home page
    url(r'^', include('website.urls')),

    # GET weather endpoints
    url(r'^api/weather/', include('api.urls'))

)
